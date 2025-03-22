const candies=(kids)=> (kids.length<2) ? -1 : Math.max(...kids)*kids.length - kids.reduce((acc, currentVal)=> acc+currentVal ,0) 
                                    