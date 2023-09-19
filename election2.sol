// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract election {
    address  owner;
    uint pollcount=0;
    uint public candidatecount=0; //number of verified candidates
    uint public nominationcount=0; //number of nominated candidates
    bool public publishresult=false;
    string public topic="";  //topic of the poll
    uint totalvote=0;       //total no of votes
    
    struct voter {       //structure of voter
        uint256 voterid;
        bool hasvoted;
        bool hasnominated;
    }
    mapping(uint => voter) public voters;   //mapping of voterid with voters
    mapping(uint =>uint) public idvoterid;   //mapping of id with voterid
    
    struct candidate {                     //structure of candidate
        uint nominationid;      
        uint256 voterid;
        string name;
        string partyname;
        uint256 age;
        uint256 votes;
        bool hasverified;
        bool hasnominated;
    }
    mapping(uint256 => candidate) public candidates;     //mapping each candidate with id
    
    struct poll {          //structure of poll
        bool start;
        bool end;
    }
    mapping(uint => poll)polls;
    
    constructor() {           //constructor setting the owner address at the time of deployment
        owner = msg.sender;
    }

    modifier onlyAdmin() {              //a modifier that will identify admin only
        require(msg.sender == owner);
        _;
    }

    function create_poll(string memory _topic) public onlyAdmin{      //function for assignning topic of poll
        require(polls[0].start ==false);
        topic= _topic;
    }

    function add_candidate(uint256 _voterid,string memory _name,string memory _partyname,uint256 _age) public {   //function for nominations
        require(msg.sender != owner);
        require(candidates[nominationcount].hasnominated==false);
        require(voters[_voterid].hasnominated==false);
        candidate memory newcandidate = candidate({
            nominationid: nominationcount,
            voterid: _voterid,
            name: _name,
            partyname: _partyname,
            age: _age,
            votes: 0,
            hasverified: false,
            hasnominated: true
        });
        candidates[nominationcount]=newcandidate;
        nominationcount+=1;
        voters[_voterid].hasnominated=true;
    }

    function start_poll()public onlyAdmin{     //function to start the voting phase
        polls[0].start =true;
        polls[0].end=false;
    }

    function vote(uint id,uint _voterid) public{   //function of voting
        require(msg.sender != owner);
        require(voters[_voterid].hasvoted==false);
        require(candidates[id].hasverified==true);
        require(polls[0].start ==true && polls[0].end ==false);
        candidates[id].votes +=1;
        voters[_voterid].hasvoted=true;
        idvoterid[totalvote]=_voterid;
        totalvote+=1;
    }

    function end_poll()public onlyAdmin{  //function to end the voting
        polls[0].end =true;
        polls[0].start=false;
    }

    function has_started() public view returns(uint){       //getter function to chech if voting has started or not
        if(polls[0].start==true && polls[0].end==false){
            return 1;
        }
        else{
            return 0;
        }

    }

    function has_ended() public view returns(uint){    //getter function to chech if voting has ended or not
        if(polls[0].start==false && polls[0].end==true){
            return 1;
        }
        else{
            return 0;
        }

    }

    function gettopic() public view returns(string memory){  //getter function to get the topic of poll
        return(topic);
    }

    function has_votted(uint _voterid)  public view returns(uint){ //function to check id voter has already voted or not
        if(voters[_voterid].hasvoted==true){
            return 1;
        }
        else{
            return 0;
        }
    }

    function votecount(uint id)  public view returns(uint){    //function to return vote count of any candidate
        require(polls[0].end ==true);
        require(publishresult==true);
        return (candidates[id].votes);
    }

    function setpublishresult() public onlyAdmin{  //function to publish result
        require(polls[0].end ==true);
        publishresult=true;
    }

    function acceptcandidate(uint id) public onlyAdmin{ //function to accept candidates upon verification
        require(polls[0].start ==false);
        candidates[id].hasverified=true;
        candidatecount+=1; 
    }

    function rejectcandidate(uint id,uint _voterid) public onlyAdmin{     //function to reject candidates upon verification
        candidates[id].hasnominated=false;
        voters[_voterid].hasnominated=false;
        candidates[id].hasverified=false;
    }

    function has_verified(uint id) view public returns(bool){   //check if candidate is verified or not
        return(candidates[id].hasverified);
    }
    
    function reset() public onlyAdmin{       //function to reset all the variables so that new vote canbe started
        require(polls[0].end ==true);
        require(publishresult==true);
        for(uint i=0;i<nominationcount;i++){
            candidates[i].hasverified=false;
            candidates[i].hasnominated=false;
            candidates[i].votes=0;
        }
        publishresult=false;
        topic="";
        for(uint i=0;i<totalvote;i++){
            voters[idvoterid[i]].hasvoted=false;
            voters[idvoterid[i]].hasnominated=false;
        }
        totalvote=0;
        candidatecount=0;
        nominationcount=0;
    }
}
