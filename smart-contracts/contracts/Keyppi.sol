// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Keyppi {
    uint256 giftId;

    event gift(
        uint256 indexed giftId,
        string recipientName,
        string wallet,
        string senderName
    );

    // Write a Proof of Gift on the blockchain
    function ProofOfGift(string memory recipientName, string memory wallet, string memory senderName) public {
        emit gift(
            giftId,
            recipientName,
            wallet,
            senderName
        );

        giftId += 1;
    }
}