// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;
contract Counter {

  uint counter  ;
  address payable owner ;
  uint public dateOfDeployment ;

  constructor(){
    counter = 0;
    owner = payable(msg.sender);
    dateOfDeployment = block.timestamp;
  }

  function getCounter() public view returns(uint){
    return counter;
  }

  function inc() public {
    counter++;
  }

  function dec() public {
    counter--;
  }

  function transferOwner()public payable {
    require(msg.sender == owner, "owner callable");
    owner.transfer(address(this).balance);
  }

  receive() external payable{}
}
