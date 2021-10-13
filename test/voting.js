const { expectRevert } = require("@openzeppelin/test-helpers");
const Voting = artifacts.require("Voting");

contract("Voting", (accounts) => {
    let voting = null;
    const admin = accounts[0];
    const voter1 = accounts[1];
    const voter2 = accounts[2];
    const voter3 = accounts[3];
    const nonVotes = accounts[4];
    before(async() => {
        voting = await Voting.deployed();
    });

    it("should add voters", async() => {
        await voting.addVoters([voter1, voter2, voter3]);
        const results = await Promise.all(
            [voter1, voter2, voter3].map(voter =>
                voting.voters(voter)
            )
        );
        results.forEach(result => assert(result === true));
    });
})