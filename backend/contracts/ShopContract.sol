// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <8.13.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract ShopContract is Ownable {

  function buy(address seller) external payable {
      payable(seller).transfer(msg.value); 
  }

}