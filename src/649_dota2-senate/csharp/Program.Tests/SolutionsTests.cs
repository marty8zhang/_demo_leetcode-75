namespace Program.Tests;

using FluentAssertions;

public class SolutionsTests
{
    [Fact]
    public void GivenASingleR_WhenPredictingVictory_ThenReturnsRadiant()
    {
        SolutionThree.PredictPartyVictory("R").Should().Be("Radiant");
    }

    [Fact]
    public void GivenASingleD_WhenPredictingVictory_ThenReturnsDire()
    {
        SolutionThree.PredictPartyVictory("D").Should().Be("Dire");
    }

    [Fact]
    public void GivenOnlyRs_WhenPredictingVictory_ThenReturnsRadiant()
    {
        SolutionThree.PredictPartyVictory("RR").Should().Be("Radiant");
    }

    [Fact]
    public void GivenOnlyDs_WhenPredictingVictory_ThenReturnsDire()
    {
        SolutionThree.PredictPartyVictory("DDD").Should().Be("Dire");
    }

    [Fact]
    public void GivenRsOutnumberDs_WhenPredictingVictory_ThenReturnsRadiant()
    {
        SolutionThree.PredictPartyVictory("DRR").Should().Be("Radiant");
    }

    [Fact]
    public void GivenDsOutNumberRs_WhenPredictingVictory_ThenReturnsDire()
    {
        SolutionThree.PredictPartyVictory("RDDRD").Should().Be("Dire");
    }

    [Fact]
    public void
        GivenDsOutnumberRsButRsCastVotesFirst_WhenPredictingVictory_ThenReturnsRadiant()
    {
        SolutionThree.PredictPartyVictory("RRDDD").Should().Be("Radiant");
    }

    [Fact]
    public void
        GivenRsOutNumberDsButDsCastVotesFirst_WhenPredictingVictory_ThenReturnsDire()
    {
        SolutionThree.PredictPartyVictory("DRDRR").Should().Be("Dire");
    }
}