//Smart Contract
// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract election {
    address  owner;
    uint pollcount=0;
    uint public candidatecount=0;
    uint public nominationcount=0;
    bool public publishresult=false;
    string public topic="";
    uint totalvote=0;
    struct voter {    //structure of voter
        uint256 aadhar;
        bool hasvoted;
        bool hasnominated;
    }
    mapping(uint => voter) public voters;
    mapping(uint =>uint) public idaadhar;
    struct candidate {
        uint nominationid;      //structure of candidate
        uint256 aadhar;
        string name;
        string partyname;
        uint256 age;
        uint256 votes;
        bool hasverified;
        bool hasnominated;
    }
    mapping(uint256 => candidate) public candidates;     //mapping each candidate with id
    struct poll {
        bool start;
        bool end;
    }
    mapping(uint => poll)polls;
    constructor() {
        owner = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == owner);
        _;
    }
    function create_poll(string memory _topic) public onlyAdmin{
        require(polls[0].start ==false);
        topic= _topic;
    }
    function add_candidate(uint256 _aadhar,string memory _name,string memory _partyname,uint256 _age) public {
        require(msg.sender != owner);
        require(candidates[nominationcount].hasnominated==false);
        require(voters[_aadhar].hasnominated==false);
        candidate memory newcandidate = candidate({
            nominationid: nominationcount,
            aadhar: _aadhar,
            name: _name,
            partyname: _partyname,
            age: _age,
            votes: 0,
            hasverified: false,
            hasnominated: true
        });
        candidates[nominationcount]=newcandidate;
        nominationcount+=1;
        voters[_aadhar].hasnominated=true;
    }

    function start_poll()public onlyAdmin{
        polls[0].start =true;
        polls[0].end=false;
    }

    function vote(uint id,uint _voteraadhar) public{
        require(msg.sender != owner);
        require(voters[_voteraadhar].hasvoted==false);
        require(candidates[id].hasverified==true);
        require(polls[0].start ==true && polls[0].end ==false);
        candidates[id].votes +=1;
        voters[_voteraadhar].hasvoted=true;
        idaadhar[totalvote]=_voteraadhar;
        totalvote+=1;
    }

    function end_poll()public onlyAdmin{
        polls[0].end =true;
        polls[0].start=false;
    }
    function has_started() public view returns(uint){
        if(polls[0].start==true && polls[0].end==false){
            return 1;
        }
        else{
            return 0;
        }

    }
    function has_ended() public view returns(uint){
        if(polls[0].start==false && polls[0].end==true){
            return 1;
        }
        else{
            return 0;
        }

    }
    function gettopic() public view returns(string memory){
        return(topic);
    }
    function has_votted(uint _aadhar)  public view returns(uint){
        if(voters[_aadhar].hasvoted==true){
            return 1;
        }
        else{
            return 0;
        }
    }
    function votecount(uint id)  public view returns(uint){
        require(polls[0].end ==true);
        require(publishresult==true);
        return (candidates[id].votes);
    }
    function setpublishresult() public onlyAdmin{
        require(polls[0].end ==true);
        publishresult=true;
    }
    function acceptcandidate(uint id) public onlyAdmin{
        require(polls[0].start ==false);
        candidates[id].hasverified=true;
        candidatecount+=1; 
    }
    function rejectcandidate(uint id,uint _aadhar) public onlyAdmin{
        candidates[id].hasnominated=false;
        voters[_aadhar].hasnominated=false;
        candidates[id].hasverified=false;
    }
    function has_verified(uint id) view public returns(bool){
        return(candidates[id].hasverified);
    }
    function reset() public onlyAdmin{
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
            voters[idaadhar[i]].hasvoted=false;
            voters[idaadhar[i]].hasnominated=false;
        }
        totalvote=0;
        candidatecount=0;
        nominationcount=0;
    }
}