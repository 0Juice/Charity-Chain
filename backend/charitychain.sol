// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CharitySystem {
    address public admin;
    uint256 public totalUsers;
    uint256 public totalCharities;
    
    struct User {
        bool isCharity;
        uint256 balance;
    }
    
    mapping(address => User) public users;
    
    event UserDonation(address indexed user, uint256 amount);
    event UserPromotedToCharity(address indexed user);

    constructor() {
        admin = msg.sender;
    }

    modifier onlyAdmin() {
        require(msg.sender == admin, "Only the admin can call this function");
        _;
    }

    modifier onlyUser() {
        require(!users[msg.sender].isCharity, "Charities cannot donate");
        _;
    }

    modifier onlyCharity() {
        require(users[msg.sender].isCharity, "Only charities can receive donations");
        _;
    }

    function registerAsUser() external {
        require(!users[msg.sender].isCharity, "Address is already registered as a charity");
        require(users[msg.sender].balance == 0, "Address already has a balance");
        
        users[msg.sender].isCharity = false;
        totalUsers++;
    }

    function registerAsCharity() external onlyUser {
        users[msg.sender].isCharity = true;
        totalCharities++;
        emit UserPromotedToCharity(msg.sender);
    }

    function donateToCharity(address payable charityAddress) external onlyUser payable {
        require(users[charityAddress].isCharity, "Recipient is not a registered charity");
        require(msg.value > 0, "Donation amount must be greater than zero");
        
        uint256 amount = msg.value;
        users[charityAddress].balance += amount;
        emit UserDonation(msg.sender, amount);
    }

    function withdrawDonations() external onlyCharity {
        require(users[msg.sender].balance > 0, "No balance to withdraw");
        
        uint256 amountToWithdraw = users[msg.sender].balance;
        users[msg.sender].balance = 0;
        payable(msg.sender).transfer(amountToWithdraw);
    }

    function getContractBalance() external view returns (uint256) {
        return address(this).balance;
    }
}