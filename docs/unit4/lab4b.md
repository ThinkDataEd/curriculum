##***<u>Lab 4B - What's the score?</u>***
Directions: Follow along with the slides and answer the questions in **bold** font in your journal.

###**Previously**
* In the previous lab, we learned we could make predictions about one variable by utilizing the
information of another.

* In this lab, we will learn how to measure the accuracy of our predictions.

    – This in turn will let us evaluate how well a model performs at making predictions.

    – We'll also use this information later to compare different models to find which model
    makes the best predictions.

###**Predictions using a line**
* Load the ```arm_span``` data again.

    – Create an ```xyplot``` with ```height``` on the y-axis and ```armspan``` on the x-axis.

    – Type ```add_line()``` to run the ```add_line``` function; you'll be prompted to click twice in the
    plot window to create a line that you think fits the data well.

* Fill in the blanks below to create a function that will make predictions of people's ```height```s based
on their ```armspan```:

        predict_height <- function(armspan) {
        ____ * armspan + ____
        }

###**Make your predictions**
* Fill in the blanks to include your predictions in the ```arm_span``` data.

        ____ <- mutate(____, predicted_height = ____(____))

* Now that we've made our predictions, we'll need to figure out a way to decide how accurate our
predictions are.

    – We'll want to compare our *predicted heights* to the *actual heights*.

    – At the end, we'll want to come up with a single number summary that describes our
    model's accuracy.

###**Sums of differences**
* A *residual* is the difference between the actual and predicted value of a quantity of interest.

* Fill in the blanks below to create a function which calculates the sum of differences:

        ____ <- mutate(____, residual = ____ - ____)

* **What do the residuals measure?**

* One method we might consider to measure our model's accuracy is to sum the residuals.

* Fill in the blanks below to calculate our accuracy summary.

        summarize(____, sum(____))

* Hint: Like ```mutate```, the first argument of ```summarize``` is a dataframe, and the second argument is the action to perform on a column of the dataframe. Whereas the output of ```mutate``` is a column, the output of ```summarize``` is (usually) a single number summary.

###**Checking our work**
* **Describe and interpret, in words, what the output of your accuracy summary means.**

    – **Compare your accuracy summary with a neighbors. Whose line was more accurate
    and why?**

* **Write down why adding positive and negative errors together is problematic for assessing
prediction accuracy.**

    – **Why does calculating the squared values for the differences solve this problem?**

* The *mean squared error* (MSE) is calculated by squaring all of the residuals, and then taking the mean of the squared residuals.

* Fill in the blanks below to calculate the MSE of your line.

        summarize(____, mean((____)^2)

###**On your own**

* Create a *regression line* as you did in the previous lab, for ```height``` and ```armspan```.

    – We also refer to *regression lines* as *linear models*.

    – Assign this model the name ```best_fit```.

* Making predictions with models ```R``` is familiar with is simpler than with lines, or models, we come up
with ourselves.

    – Fill in the blanks to make predictions using ```best_fit```:

        ____ <- mutate(____, predicted_height = predict(____))

* Hint: the ```predict``` function takes a linear model as input, and outputs the predictions of that model.

* Calculate the MSE for these new predicted values.

###**The magic of lm()**
* The ```lm()``` function creates the *line of best fit* equation by finding the line that minimizes the *mean
squared error*. Meaning, it's the *best fitting line possible*.

    – Compare the MSE value you calculated using the line you fitted with ```add_line()``` to the
    the same value you calculated using the ```lm``` function.

    – Ask your neighbors if any of their lines beat the ```lm``` line in terms of the MSE. Were any of
    them successful?

* To see how the ```lm``` line fits your data, create a scatterplot and then run:

        add_line(intercept = ____, slope = ____)
