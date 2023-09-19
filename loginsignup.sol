// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract loginsignup{
    address owner;
    uint signupnumber;
    uint loginnumber;
    string employeeloginnumber;
     constructor() {           //constructor setting the owner address at the time of deployment
        owner = msg.sender;
    }
    modifier onlyAdmin() {              //a modifier that will identify admin only
        require(msg.sender == owner);
        _;
    }
    struct user{
        uint voterid;
        string password;
        string mobileno;
        bool hassignedup;
    }
    mapping(uint => user) users;
    function signup(uint _voterid,string memory _mobileno, string memory _password1, string memory _password2) public{
        require(users[_voterid].hassignedup==false);
        if(keccak256(abi.encodePacked(_password1)) == keccak256(abi.encodePacked(_password2))){
            users[_voterid].password=_password1;
            users[_voterid].mobileno=_mobileno;
            users[_voterid].hassignedup=true;
            signupnumber=_voterid;
            
        }
        else{
            signupnumber=0;
        } 
    }
    function getsignupnumber() public view returns(uint){
        return signupnumber;
    }
    function login(uint _voterid,string memory _password) public{
        require(users[_voterid].hassignedup==true);
        if(keccak256(abi.encodePacked(users[_voterid].password))==keccak256(abi.encodePacked(_password))){
            loginnumber=_voterid;
        }
        else{
            loginnumber= 0;
        }
    }
    function getmobilenumber(uint _voterid) public view returns(string memory){
        return users[_voterid].mobileno;
    }
    function getloginnumber() public view returns(uint){
        return loginnumber;
    }
    struct employee{
        string eid;
        string password;
    }

    mapping(string => employee) employees;
    function addemployee(string memory _eid,string memory _password) public onlyAdmin {
        employees[_eid].password=_password;
    }
    function employeelogin(string memory _eid,string memory _password) public onlyAdmin{
        if(keccak256(abi.encodePacked(employees[_eid].password))==keccak256(abi.encodePacked(_password))){
            employeeloginnumber=_eid;
        }
        else{
            employeeloginnumber="0";
        }
    }
    function getemployeeloginnumber() public onlyAdmin view returns(string memory){
        return employeeloginnumber;
    }
}
