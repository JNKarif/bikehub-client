import React from 'react';

const Blog = () => {
    return (
        <div className='mx-10 my-10 '>
            <div className="card  my-5 w-full bg-base-200  shadow-xl image-full">
                <div className="card-body ">
                    {/* question 1  */}
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p>
                        There are some different ways to manage state e.g. local state,
                        global state,
                        server state and url state etc.
                        First of all useState hook is used to mananage local state. Secondly,
                        to manage multiple components we use global state. Thirdly, server
                        state manages external server data there are some tools like useEffect and useQuery.
                        Finally, we can say about URL state which manage data exists in URL with pathname and query
                        parameter.
                        <br />
                        Besides all of these there lots of state management tools now a days
                        such as  Redux, MobX, Akita, Recoil, and Zustand.
                        Among them React Redux is so popular which is considered to a magic enabling
                        straightfowward state connection.
                    </p>
                </div>
            </div>
            <div className="card  my-5 w-full bg-base-100 shadow-xl image-full">
                <div className="card-body">

                    {/* question 2 */}
                    <h2 className="card-title">How does prototypical inheritance work?</h2>
                    <p>
                        Defining JavaScript's prototypical inheritance it has one construct: objects.
                        A link of private property is hold by every object to another object meant its prototype.
                        Every prototype object has its own
                        prototype till reaching with null as its prototype.
                        To define null which has no prototype, and does till the final link.

                        An inherited function acts just as any other property, When an
                        inherited function is executed,
                        the value of this points to the inheriting object,
                        not to the prototype object where the function is an own property.
                        The power of prototypes is that we can reuse a set of properties
                        if they should be present on every instance — especially for methods.

                    </p>
                </div>
            </div>
            <div className="card  my-5 w-full bg-base-100 shadow-xl image-full">
                <div className="card-body">


                    {/* question 3 */}
                    <h2 className="card-title">What is a unit test? Why we should write unit test?</h2>
                    <p>
                       
                        Unit test is perfomed to determine the software errors by the developers.

                        Functional accuracy is judged by this of independent modules and components.
                        Unit testing is part of software development and carried out during the development procedures



                        <br />
                        <br />
                        Advantages of Unit Testing:
                        1. Unit Testing allows developers to learn what functionality is provided by a unit and how to use it to gain a basic understanding of the unit API.
                        <br />
                        2. Unit testing allows the programmer to refine code and make sure the module works properly.
                        <br />
                        3. Unit testing enables testing parts of the project without waiting for others to be completed.


                    </p>
                </div>
            </div>
            <div className="card  my-5 w-full bg-base-100 shadow-xl image-full">
                <div className="card-body">


                    {/* question 4 */}
                    <h2 className="card-title">React vs Angular vs Vue ?</h2>
                    <p>
                    Vue provides higher customizability and hence is easier to learn than Angular or React. 
                    Further, Vue has an overlap with Angular and React with respect to their functionality like the
                     use of components. 
                    Hence, the transition to Vue from either of the two is an easy option.

                    Vue JS is Perfect for dynamic and single page applications , react perfect for dynamic and single page applications and angular 
                    perfect for dynamic and single page applications.  Vue.js has libraries with limited functionality, which can be 
                    extended through third-party services.There’s a wider variety of third-party services for React due 
                    to the library’s bigger popularity. Angular has Monolithic framework with extensive functionality out of the box,
                     making Angular applications more heavyweight.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;