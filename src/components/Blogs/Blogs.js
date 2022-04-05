import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blogs'>

            <div className="blog card ">
                <h2>What Is Context API ?</h2>

                <p>React has added a new Context API to its v16.3.0. This API works much like Redux. But not exactly Redux, but it works differently.The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p>
            </div>


            <div className="blog card">
                <h2>What is Semantic Tag?</h2>

                <p>The main function of a Semantic Elements is to clearly define the meaning of both the browser and the developer.
                    Semantic elements have meaningful names which tells about type of content. For example header, footer, table, etc. HTML5 introduces many semantic elements as mentioned below which make the code easier to write and understand for the developer as well as instructs the browser on how to treat them.
                </p>
            </div>


            <div className="blog card ">
                <h2>difference Between Inline and Inline Block Element?</h2>

                <p>Compared to display: inline, the major difference is that display: inline-block allows to set a width and height on the element.
                    Also, with display: inline-block, the top and bottom margins/paddings are respected, but with display: inline they are not.
                    Compared to display: block, the major difference is that display: inline-block does not add a line-break after the element, so the element can sit next to other elements..
                </p>
            </div>



        </div>
    );
};

export default Blogs;