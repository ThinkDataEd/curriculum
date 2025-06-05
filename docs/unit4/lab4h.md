##***<u>Lab 4H - Finding clusters</u>***

Directions: Follow along with the slides, completing the questions in <span style="color:midnightblue;">**blue**</span> on your computer, and answering the questions in <span style="color:firebrick;">**red**</span> in your journal.

###**Clustering data**
* We've seen previously that data scientists have methods to predict values of specific
variables.

    – We used *regression* to predict numerical values and *classification* to predict
    categories.

* *Clustering* is similar to classification in that we want to group people into categories. But there's one important difference:

    – In *clustering*, we don't know how many groups to use because we're not predicting
    the value of a known variable!

* In this lab, we'll learn how to use the k-means clustering algorithm to group our data into
clusters.

###**The k-means algorithm**
* The k-means algorithm works by splitting our data into *k* different clusters.

    – The number of clusters, the value of *k*, is chosen by the data scientist.

* The algorithm works *only* for numerical variables and *only* when we have no missing data.

* <span style="color:midnightblue;">**To start, use the ```data``` function to load the ```futbol``` data set.**</span>

    – This data contains 24 players from the US Men's National Soccer team (USMNT)
    and 33 quarterbacks from the National Football League (NFL).

* <span style="color:firebrick;">**(1) Write and run code creating a scatterplot of the players ```ht_inches``` and ```wt_lbs``` and color each dot based on the ```league``` they play for.**</span>

###**Running k-means**
* After plotting the player's heights and weights, we can see that there are two clusters, or
different types, of players:

    – Players in the NFL tend to be taller and weigh more than the shorter and lighter
    USMNT players.

* <span style="color:firebrick;">**(2) Fill in the blanks below to use k-means to cluster the same height and weight data into two
groups:**</span>

        kclusters(____~____, data = futbol, k = ____)

* <span style="color:firebrick;">**(3) Use this code and the ```mutate``` function to add the values from ```kclusters``` to the ```futbol```
data. Name the variable ```clusters```.**</span>

###**k-means vs. ground-truth**
* In comparing our football and soccer players, we *know* for certain which league each player
plays in. We call this knowledge *ground-truth*.

* Knowing the *ground-truth* for this example is helpful to illustrate how k-means works, but in reality, data-scientists would run k-means not knowing the *ground-truth*.

* <span style="color:firebrick;">**(4) Compare the clusters chosen by k-means to the ground-truth. How successful was k-means
at recovering the ```league``` information?**</span>

###**On your own**
* <span style="color:midnightblue;">**Load your class's ```timeuse``` data (remember to run ```timeuse_format``` so each row represents the mean time each student spent participating in the various activities).**</span>

* <span style="color:firebrick;">**(5) Write and run code creating a scatterplot of ```homework``` and ```videogames``` variables.**</span>

* <span style="color:firebrick;">**(6) Based on this graph, identify and remove any outliers by using the ```filter``` function.**</span>

* <span style="color:firebrick;">**(7) Write and run code using ```kclusters``` with ```k=2``` for ```homework``` and ```videogames```.**</span>

* <span style="color:firebrick;">**(8) Describe how the groups differ from each other in terms of how long each
group spends playing ```videogames``` and doing ```homework```.**</span>