##***<u>Lab 4A - If the line fits ...</u>***

Directions: Follow along with the slides, completing the questions in <span style="color:midnightblue;">**blue**</span> on your computer, and answering the questions in <span style="color:firebrick;">**red**</span> in your journal.

###**How to make predictions**
* Anyone can make predictions.

    – Data scientists use data to inform their predictions by using the information learned
    from the sample to make predictions for the whole population.

* In this lab, we'll learn how to make predictions by finding the *line of best fit*.

    – You will also learn how to use the information from one variable to make predictions
    about another variable.

###**Predicting heights**
* <span style="color:firebrick;">**(1) Write and run code using the ```data()``` function to load the ```arm_span``` data.**</span>

* This data comes from a sample of 90 people in the Los Angeles area.

    – The measurements of ```height``` and ```armspan``` are in inches.

    – A person's ```armspan``` is the maximum distance between their fingertips when they
    spread their arms out wide.

* <span style="color:firebrick;">**(2) Write and run code making a plot of the ```height``` variable.**</span>

    – <span style="color:firebrick;">**(3) If you had to predict the height of someone in the Los Angeles area, what single height
    would you choose and why?**</span>

    – <span style="color:firebrick;">**(4) Would you describe this as a *good* guess? What might you try to improve your predictions?**</span>

###**Predicting heights knowing arm spans**
* <span style="color:firebrick;">**(5) Write and run code creating two subsets of our ```arm_span``` data:**</span>

    – One for ```armspan >= 61``` and ```armspan <= 63```.
    
    – A second for ```armspan >= 64``` and ```armspan <= 66```.

* <span style="color:firebrick;">**(6) Write and run code creating a ```histogram``` for the ```height``` of people in each subset.**</span>

* <span style="color:firebrick;">**Answer the following based on the data:**</span>

    – <span style="color:firebrick;">**(7) What ```height``` would you predict if you knew a person had an ```armspan``` around
    62 inches?**</span>

    – <span style="color:firebrick;">**(8) What ```height``` would you predict if you knew a person had an ```armspan``` around
    65 inches?**</span>

    – <span style="color:firebrick;">**(9) Does knowing someone's ```armspan``` help you predict their height? Why or why not?**</span>

###**Fitting lines**
* Notice that there is a trend that people with a larger ```armspan``` also tend to have a larger
mean ```height```.

    – One way of describing this sort of trend is with a line.

* Data scientists often *fit* lines to their data to make predictions.

    – What we mean by *fit* is to come up with a line that's close to as many of the data
    points as possible.
    
* <span style="color:firebrick;">**(10) Write and run code creating a scatterplot for ```height``` and ```armspan```. Then run the following code.**</span>

        add_line()

* <span style="color:midnightblue;">**On the *Plot* pane, click two data points to draw a line through.**</span>

* NOTE: Watch the following video if you are experiencing difficulties obtaining your line [https://youtu.be/pGqXHGhhwJ8](https://youtu.be/pGqXHGhhwJ8 "https://youtu.be/pGqXHGhhwJ8")

* If you are unsuccessful using the ```add_line()``` function, refer to the next slide to learn how to use the ```get_line()``` function.

###**get_line()**
* The ```get_line()``` function does not rely on clicking on the scatterplot to choose points, but rather on you providing the points manually.

* For example, let's say you want to obtain the equation of the line that passes through the points (59,60) and (68,67). This is how you would use the ```get_line()``` function:

        get_line(c(59,60), c(68,67))

        ##      intercept       slope
        ##     14.1111111   0.7777778

* Notice the output is the y-intercept and the slope of your line.

* Now you can use the ```add_line()``` function to include the line in your scatterplot.

        add_line(intercept = 14.1111111, slope = 0.7777778)

* If your line doesn't quite fit the way you want it, try another ordered pair or make modifications to the existing equation.

###**Predicting with lines**
* <span style="color:firebrick;">**(11) Draw a line that you think is a good *fit* and write down its equation.**</span>

* <span style="color:firebrick;">**(12) Using your equation: Predict how tall a person with a 62-inch ```armspan``` and a person with a 65-inch ```armspan``` would be.**</span>

* Using a line to make predictions also lets us make predictions for ```armspan```s that aren't in our
data.

    – <span style="color:firebrick;">**(13) How tall would you predict a person with a 63.5-inch ```armspan``` to be?**</span>

    – <span style="color:firebrick;">**(14) Compare your answers with a neighbor. Did both of you come up with the same equation for a line? If not, can you tell which line fits the data best?**</span>
