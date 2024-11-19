namespace Program.Tests;

using FluentAssertions;

public class SolutionOneTests
{
    [Fact]
    public void GivenTwoNumbers_WhenProducingProducts_ThenReturnsTheTwoNumbersInReversedOrder()
    {
        SolutionOne.ProductExceptSelf([2, 3]).Should().Equal([3, 2]);
    }

    [Fact]
    public void
        GivenOneNegativeAndOnePositiveNumbers_WhenProducingProducts_ThenReturnsTheTwoNumbersInReversedOrder()
    {
        SolutionOne.ProductExceptSelf([-2, 3]).Should().Equal([3, -2]);
    }

    [Fact]
    public void
        GivenAZeroAmongTheNumbers_WhenProducingProducts_ThenReturnsAllZerosButOneNonZeroProduct()
    {
        SolutionOne.ProductExceptSelf([-1, 1, 0, -3, 3]).Should().Equal([0, 0, 9, 0, 0]);
    }

    [Fact]
    public void GivenNonZeroNumbers_WhenProducingProducts_ThenReturnsExpectedProducts()
    {
        SolutionOne.ProductExceptSelf([1, 2, 3, 4]).Should().Equal([24, 12, 8, 6]);
    }
}