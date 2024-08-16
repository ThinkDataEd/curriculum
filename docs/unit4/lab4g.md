##***<u>Lab 4G - Growing trees</u>***

Directions: Follow along with the slides, completing the questions in <span style="color:midnightblue;">**blue**</span> on your computer, and answering the questions in <span style="color:firebrick;">**red**</span> in your journal.

###**Trees vs. Lines**
* So far in the labs, we've learned how we can fit linear models to our data and use them to make predictions.

* In this lab, we'll learn how to make predictions by growing trees.

    – Instead of creating a line, we split our data into branches based on a series of *yes* or *no* questions.

    – The branches help sort our data into *leaves* which can then be used to make predictions.

* <span style="color:midnightblue;">**Start, by loading the ```titanic``` data.**</span>

###**Our first tree**
* <span style="color:midnightblue;">**Use the ```tree()``` function to create a *classification* tree that predicts whether a person ```survived``` the Titanic based on their ```sex```.**</span>

    – A *classification* tree tries to predict which category a categorical variable would belong to based on other variables.

    – The syntax for ```tree``` is similar to that of the ```lm()``` function.

    – <span style="color:midnightblue;">**Assign this model the name ```tree1```.**</span>

* <span style="color:firebrick;">**Why can't we just use a *linear model* to predict whether a passenger on the Titanic
```survived``` or not based on their ```sex```?**</span>

###**Viewing trees**
* <span style="color:midnightblue;">**To actually look at and interpret our ```tree1```, place the model into the ```treeplot``` function.**</span>

    – <span style="color:firebrick;">**Write down the labels of the two *branches*.**</span>

    – <span style="color:firebrick;">**Write down the labels of the two *leaves*.**</span>

* <span style="color:firebrick;">**Answer the following, based on the ```treeplot```:**</span>

    – <span style="color:firebrick;">**Which ```sex``` does the model predict will survive?**</span>

    – <span style="color:firebrick;">**Where does the plot tell you the number of people that get sorted into each leaf?
    How do you know?**</span>

    – <span style="color:firebrick;">**Where does the plot tell you the number of people that have been sorted
    *incorrectly* in each leaf?**</span>

###**Leafier trees**
* <span style="color:midnightblue;">**Similar to how you included multiple variables for a linear model, create a ```tree``` that predicts whether a person ```survived``` based on their ```sex```, ```age```, ```class```, and where they ```embarked```.**</span>

    – <span style="color:midnightblue;">**Call this model ```tree2```.**</span>

* <span style="color:firebrick;">**Create a treeplot for this model and answer the following question:**</span>

    – <span style="color:firebrick;">**Mrs. Cumings was a 38-year-old female with a 1st class ticket from Cherbourg.
    Does the model predict that she survived?**</span>

    – <span style="color:firebrick;">**Which variable ended up not being used by ```tree2```?**</span>

###**Tree complexity**
* By default, the ```tree()``` function will fit a *tree model* that will make good predictions without needing lots of branches.

* We can increase the complexity of our trees by changing the complexity parameter, ```cp```, which equals ```0.01``` by default.

* We can also change the minimum number of observations needed in a leaf before we split it into a new branch using ```minsplit```, which equals ```20``` by default.

* <span style="color:midnightblue;">**Using the same variables that you used in ```tree2```, create a model named ```tree3``` but include ```cp = 0.005``` and ```minsplit = 10``` as arguments.**</span>

    – <span style="color:firebrick;">**How is ```tree3``` different from ```tree2```?**</span>

###**Predictions and Cross-validation**
* Just like with *linear models*, we can use cross-validation to measure how well our *classification trees* perform on unseen data.

* First, we need to compute the predictions that our model makes on test data.

    – <span style="color:midnightblue;">**Use the ```data``` function to load the ```titanic_test``` data.**</span>

    – <span style="color:midnightblue;">**Fill in the blanks below to predict whether people in the ```titanic_test``` data survived or not using ```tree1```.**</span>

    - Note: the argument ```type = "class"``` tells the ```predict``` function that we are classifying a categorical variable instead of predicting a numerical variable.

        titanic_test <- mutate(____, prediction = predict(____, newdata = ____, type = "class"))

###**Measuring model performance**
* Similar to how we use the *mean squared error* to describe how well our model predicts numerical variables, we use the *misclassification rate* to describe how well our model predicts categorical variables.

    – The *misclassification rate* (MCR) is the number of people who were predicted to be in
    one category but were actually in another.

* <span style="color:midnightblue;">**Run the following command to see a side-by-side comparison of the actual outcome and the predicted outcome:**</span>

        View(select(titanic_test, survived, prediction))

* <span style="color:firebrick;">**Where does the first misclassification occur?**</span>

###**Misclassification rate**

* In order to tally up the total number of misclassifications, we need to create a function that compares the actual outcome with the predicted outcome. The **not equal to** operator (!=) will be useful here.

* <span style="color:midnightblue;">**Fill in the blanks to create a function to calculate the MCR.**</span>

* Hint: sum(____!=____) will count the number of times that the left-hand side does not equal the right-hand side.

    - We want to count the number of times that actual does not equal predicted and then divide by the total number of observations.

        calc_mcr <- function(actual, predicted) {
        sum(____ != ____) / length(____)
        }
    
* <span style="color:midnightblue;">**Then run the following to calculate the MCR.**</span>

        summarize(titanic_test, mcr = calc_mcr(survived, prediction))

###**On your own**
* <span style="color:firebrick;">**In your own words, explain what the *misclassification rate* is.**</span>

* <span style="color:firebrick;">**Which model (```tree1```, ```tree2``` or ```tree3```) had the lowest misclassification rate for the ```titanic_test``` data?**</span>

* <span style="color:midnightblue;">**Create a 4th model using the same variables used in ```tree2```. This time though, change the *complexity parameter* to ```0.0001```. Then answer the following.**</span>

    – <span style="color:firebrick;">**Does creating a more complex *classification tree* always lead to better
    predictions? Why not?**</span>

* <span style="color:midnightblue;">**A *regression tree* is a tree model that predicts a numerical variable. Create a *regression tree* model to predict the Titanic's passenger's ages and calculate the MSE.**</span>

    – Plots of regression trees are often too complex to plot.