##***<u>Lab 4D - Interpreting correlations</u>***

Directions: Follow along with the slides, completing the questions in <span style="color:midnightblue;">**blue**</span> on your computer, and answering the questions in <span style="color:firebrick;">**red**</span> in your journal.

###**Some background...**
* So far, we’ve learned about measuring the success of a model based on how close its
predictions come to the actual observations.

* The *correlation coefficient* is a tool that gives us a fairly good idea of how these predictions will
turn out without having to make predictions on future observations.

* For this lab, we will be using the ```movie``` data set to investigate the following questions:

    *Which variables are better predictors of a movie's ```critics_rating``` when the predictions are
    made using a line of best fit?*

###**Correlation coefficients**

* The *correlation coefficient* describes the *strength* and *direction* of the linear trend.

* It's only useful when the trend is linear and both variables are numeric.

    <img src="../../img/4xd0a.png" />

* <span style="color:firebrick;">**Are these variables linearly related? Why or why not?**</span>

###**Correlation review I**

<img src="../../img/4xd0a.png" />

* Correlation coefficients with values close to 1 are very strong with a positive slope. Values close
to -1 means the correlation is very strong with a negative slope.

* <span style="color:firebrick;">**Does this plot have a positive or negative correlation?**</span>

###**Correlation review II**

<img src="../../img/4xd0a.png" />

* Recall that if there is no linear relation between two numerical variables, the correlation
coefficient is close to 0.

* <span style="color:firebrick;">**What do you guess the correlation coefficient will be for these
two variables?**</span>

###**The movie data**
* <span style="color:midnightblue;">**Load the ```movie``` data using the ```data``` command.**</span>

* The data comes from a variety of sources like [*IMDB*](https://www.imdb.com/) and [*Rotten Tomatoes*](https://www.rottentomatoes.com/).

    – The ```critics_rating``` contains values between 0 and 100, 100 being the best.

    – The ```audience_rating``` contains values that range between 0 and 10, 10 being the best.

    – ```n_critics``` and ```n_audience``` describe the number of reviews used for the ratings.

    – ```gross``` and ```budget``` descibes the amount of money the film made and took to make.

###**Calculating Correlation Coefficients!**
* We can use the ```cor()``` function to find the particular correlation coefficient of the variables from
the previous plot, which happen to be ```audience_rating``` and ```critics_rating```.

    – But note, the ```cor()``` function removes any observations which contain an ```NA``` value in
    either variable.

    – <span style="color:midnightblue;">**Calculate the correlation coefficient for these variables using the ```cor``` function. The
    inputs to the functions work just like the inputs of the ```xyplot``` function.**</span>

###**Now answer the following.**
* <span style="color:firebrick;">**What was the value of the correlation coefficient you calculated?**</span>

* <span style="color:firebrick;">**How does this actual value compare with the one you estimated previously?**>/span

* <span style="color:firebrick;">**Does this indicate a strong, weak, or moderate association? Why?**</span>

* <span style="color:firebrick;">**How would the scatterplot need to change in order for the correlation to be stronger?**</span>

* <span style="color:firebrick;">**How would it need to change in order for the correlation to be weaker?**</span>

###**Correlation and Predictions**
* <span style="color:midnightblue;">**Find the two variables that look to have the strongest correlation with ```critics_rating```.**</span>

    – <span style="color:midnightblue;">**Compute the correlation coefficients for ```critics_rating``` and each of the two variables.**</span>

    – <span style="color:firebrick;">**Use the correlation coefficient to determine which variable has a stronger linear
    relationship with ```critics_rating```.**</span>

* <span style="color:midnightblue;">**Fit two ```lm``` models to predict ```critics_rating``` with each variable and compute the MSE for each.**</span>

    – <span style="color:firebrick;">**Use the MSE to determine which variable is a better predictor of ```critics_rating```.**</span>

* <span style="color:firebrick;">**How are the correlation coefficient and the MSE related?**</span>

###**On your own**
* <span style="color:midnightblue;">**Select two different numerical variables from the ```movie``` data. Plot the variables using the ```xyplot()``` function.**</span>

    – <span style="color:firebrick;">**Would calculating a correlation coefficient for the two variables be appropriate?
    Justify your answer.**</span>

    – <span style="color:firebrick;">**Predict what value you think the correlation coefficient will be. Compare this value
    to the actual value. Finally, interpret what the actual correlation coefficient
    means.**</span>

* <span style="color:firebrick;">**Work with your classmates to determine which two variables have the strongest correlation
coefficient.**</span>

    - <span style="color:firebrick;">**Why do you think these variables are so strongly related? Is using the correlation
coefficient to describe the relationship appropriate and why/why not?**</span>