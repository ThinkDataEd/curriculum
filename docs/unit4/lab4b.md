##***<u>Lab 4B - What's the score?</u>***

Directions: Follow along with the slides, completing the questions in <span style="color:midnightblue;">**blue**</span> on your computer, and answering the questions in <span style="color:firebrick;">**red**</span> in your journal.

###**Previously**
* In the previous lab, we learned we could make predictions about one variable by utilizing the
information of another.

* In this lab, we will learn how to measure the accuracy of our predictions.

    – This in turn will let us evaluate how well a model performs at making predictions.

    – We'll also use this information later to compare different models to find which model
    makes the best predictions.

###**Predictions using a line**
* <span style="color:midnightblue;">**Load the ```arm_span``` data again.**</span>

    – <span style="color:midnightblue;">**Create an ```xyplot``` with ```height``` on the y-axis and ```armspan``` on the x-axis.**</span>

    – <span style="color:midnightblue;">**Type ```add_line()``` to run the ```add_line``` function; you'll be prompted to click twice in the
    plot window to create a line that you think fits the data well.**</span>

* <span style="color:midnightblue;">**Fill in the blanks below to create a function that will make predictions of people's ```height```s based
on their ```armspan```:**</span>

        predict_height <- function(armspan) {
        ____ * armspan + ____
        }

###**Make your predictions**
* <span style="color:midnightblue;">**Fill in the blanks to include your predictions in the ```arm_span``` data.**</span>

        ____ <- mutate(____, predicted_height = ____(____))

* Now that we've made our predictions, we'll need to figure out a way to decide how accurate our
predictions are.

    – We'll want to compare our *predicted heights* to the *actual heights*.

    – At the end, we'll want to come up with a single number summary that describes our
    model's accuracy.

###**Sums of differences**
* A *residual* is the difference between the actual and predicted value of a quantity of interest.

* <span style="color:midnightblue;">**Fill in the blanks below to add a column of residuals to ```arm_span```.**</span>

        ____ <- mutate(____, residual = ____ - ____)

* <span style="color:firebrick;">**What do the residuals measure?**</span>

* One method we might consider to measure our model's accuracy is to sum the residuals.

* <span style="color:midnightblue;">**Fill in the blanks below to calculate our accuracy summary.**</span>

        summarize(____, sum(____))

* Hint: Like ```mutate```, the first argument of ```summarize``` is a dataframe, and the second argument is the action to perform on a column of the dataframe. Whereas the output of ```mutate``` is a column, the output of ```summarize``` is (usually) a single number summary.

* <span style="color:firebrick;">**Describe and interpret, in words, what the output of your accuracy summary means.**</span>

* <span style="color:firebrick;">**Write down why adding positive and negative errors together is problematic for assessing prediction accuracy.**</span>

###**Mean squared error**
* When adding residuals, the positive errors in our predictions (underestimates) are cancelled out by negative errors (overestimates) which lead to the impression that our model is making better predictions than it actually is.

* To solve this problem we calculate the squared values of the errors because squared values are always positive.

* The *mean squared error* (MSE) is calculated by squaring all of the residuals, and then taking the mean of the squared residuals.

* <span style="color:midnightblue;">**Fill in the blanks below to calculate the MSE of your line.**</span>

        summarize(____, mean((____))^2)

* <span style="color:firebrick;">**Compare your MSE with a neighbor. Whose line was more accurate and why?**</span>

###**Regression lines**
* If you were to go around your class, each student would have created a different line that they feel *fit* the data best.

    - Which is a problem because everyone's line will make slightly different predictions.

* To avoid this variation in predictions, data scientists will use *regression lines*.

    - We also refer to *regression lines* as *lienar models*.

    - This line connects the mean ```height``` of people with similar ```armspan```s.

    - <span style="color:midnightblue;">**Fill in the blanks below to create a *regression line* using ```lm```, which stands for *linear model*.

        best_fit <- lm(____ ~ ____, data = arm_span)

###**Predicting with regression lines**
* Making predictions with models ```R``` is familiar with is simpler than with lines, or models, we come up
with ourselves.

    – <span style="color:midnightblue;">**Fill in the blanks to make predictions using ```best_fit```:**</span>

        ____ <- mutate(____, predicted_height = predict(____))

* Hint: the ```predict``` function takes a linear model as input, and outputs the predictions of that model.

###**The magic of lm()**
* The ```lm()``` function creates the *line of best fit* equation by finding the line that minimizes the *mean
squared error*. Meaning, it's the *best fitting line possible*.

* <span style="color:midnightblue;">**Calculate the MSE for the values predicted using the regression line.**</span>

* <span style="color:firebrick;">**Compare the MSE of the linear model you fitted with ```add_line()``` to
    the MSE of the linear model obtained with ```lm```. Which linear model performed better?**</span>

* <span style="color:firebrick;">**Ask your neighbors if any of their lines beat the ```lm``` line in terms of the MSE. Were any of them successful?**</span>
