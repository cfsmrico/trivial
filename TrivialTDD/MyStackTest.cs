using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using TrivialStack;

namespace TrivialTDD.Tests
{
    /*
     * Stack<T>
 - Push(element : T)
 - Pop() : T
 - Peek() : T
 - Count : int
 - IsEmpty : boolean
     */

    [TestClass]
    public class MyStackTests
    {
        private MyStack<int> GetFreshStack()
        {
            return new MyStack<int>();
        }

        [TestMethod]
        public void Pushing_One_Onto_New_Stack_Should_Yield_A_Stack_Where_First_Element_Is_One()
        {
            // Arrange
            var s = GetFreshStack();
            const int firstItemValue = 1;

            // Act
            var initialCount = s.Count();
            s.Push(firstItemValue);
            var firstItem = s.Peek();

            // Assert
            Assert.IsTrue(initialCount == 0, "Expected initial count of stack to be 0 but instead found value was " + initialCount);
            Assert.IsTrue(firstItem == firstItemValue,
                "First item in stack equals " + firstItem + " but expected " + firstItemValue);
        }

        [TestMethod]
        public void TestPop()
        {
            throw new NotImplementedException();
        }

        [TestMethod]
        public void TestPeek()
        {
            throw new NotImplementedException();
        }

        [TestMethod]
        public void TestCount()
        {
            throw new NotImplementedException();
        }

        [TestMethod]
        public void TestIsEmpty()
        {
            throw new NotImplementedException();
        }
    }
}
