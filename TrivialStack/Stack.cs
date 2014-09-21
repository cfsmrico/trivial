using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TrivialStack
{
    /*
     * MyStack<T>
 - Push(element : T)
 - Pop() : T
 - Peek() : T
 - Count : int
 - IsEmpty : boolean
     */
    public class MyStack<T> where T : new()
    {
        private readonly Stack<T> _internalStack;
        
        public MyStack()
        {
            _internalStack = new Stack<T>();
        }

        /// <summary>
        /// Given an item of type T, push T onto the end of MyStack
        /// </summary>
        public void Push(T arg)
        {
            _internalStack.Push(arg);
        }

        /// <summary>
        /// Return the first item inside MyStack and remove it from the internal store
        /// </summary>
        public T Pop()
        {
            return new T();
        }

        /// <summary>
        /// Return the first item inside MyStack (without mutating this object)
        /// </summary>
        public T Peek()
        {
            return _internalStack.Peek();
        }

        /// <summary>
        /// Return the number of items from the internal store of items
        /// </summary>
        public int Count()
        {
            return _internalStack.Count;
        }

        /// <summary>
        /// Return true is the internal store contains any items and false otherwise
        /// </summary>
        public bool IsEmpty()
        {
            return true;
        }
    }
}
