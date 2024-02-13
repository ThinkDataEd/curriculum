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
* <span style="color:midnightblue;">**Use the ```data()``` function to load the ```arm_span``` data.**</span>
* This data comes from a sample of 90 people in the Los Angeles area.

    – The measurements of ```height``` and ```armspan``` are in inches.

    – A person's ```armspan``` is the maximum distance between their fingertips when they
    spread their arms out wide.

* <span style="color:midnightblue;">**Make a plot of the ```height``` variable.**</span>

    – <span style="color:firebrick;">**If you had to predict the height of someone in the LA area, what single height
    would you choose and why?**</span>

    – <span style="color:firebrick;">**Would you describe this as a *good* guess? What might you try to improve your predictions?**</span>

###**Predicting heights knowing arm spans**
* <span style="color:midnightblue;">**Create two subsets of our ```arm_span``` data:**</span>

    – <span style="color:midnightblue;">**One for ```armspan >= 61``` and ```armspan <= 63```.**</span>
    
    – <span style="color:midnightblue;">**A second for ```armspan >= 64``` and ```armspan <= 66```.**</span>

* <span style="color:midnightblue;">**Create a ```histogram``` for the ```height``` of people in each subset.**</span>

* <span style="color:firebrick;">**Answer the following based on the data:**</span>

    – <span style="color:firebrick;">**What ```height``` would you predict if you knew a person had an ```armspan``` around
    62 inches?**</span>

    – <span style="color:firebrick;">**What ```height``` would you predict if you knew a person had an ```armspan``` around
    65 inches?**</span>

    – <span style="color:firebrick;">**Does knowing someone's ```armspan``` help you predict their height? Why or why not?**</span>

###**Fitting lines**
* Notice that there is a trend that people with a larger ```armspan``` also tend to have a larger
mean ```height```.

    – One way of describing this sort of trend is with a line.

* Data scientists often *fit* lines to their data to make predictions.

    – What we mean by *fit* is to come up with a line that's close to as many of the data
    points as possible.
    
* <span style="color:midnightblue;">**Create a scatterplot for ```height``` and ```armspan```. Then run the following code.**</span>

        add_line()

* <span style="color:midnightblue;">**On the *Plot* pane, click two data points to draw a line through.**</span>

* NOTE: If your line does not appear or it appears but is above the points you selected, zoom out on your browser (typically 50% if you have a Mac, 80% on Windows). Or if your line appears below the points you selected, zoom in on your browser. Then run the ```add_line()``` function again and click on two points. Zoom out (or in) until your line appears through the points you selected.

###**Predicting with lines**
* <span style="color:firebrick;">**Draw a line that you think is a good *fit* and write down its equation. Using this equation:**</span>

    – <span style="color:firebrick;">**Predict how tall a person with a 62-inch ```armspan``` and a person with a 65-inch ```armspan``` would be.**</span>

* Using a line to make predictions also lets us make predictions for ```armspan```s that aren't in our
data.

    – <span style="color:firebrick;">**How tall would you predict a person with a 63.5-inch ```armspan``` to be?**</span>

* <span style="color:firebrick;">**Compare your answers with a neighbor. Did both of you come up with the same
equation for a line? If not, can you tell which line fits the data best?**</span>
