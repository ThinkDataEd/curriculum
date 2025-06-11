##**<u>Lab 2D - Queue It Up!</u>**

Directions: Follow along with the slides, completing the questions in <span style="color:midnightblue;">**blue**</span> on your computer, and answering the questions in <span style="color:firebrick;">**red**</span> in your journal.

###**Where we left off**
* In the last lab, we looked at how we can use computer simulations to compute estimates of
simple probabilities.

    – Like the probability of drawing a song genre from a playlist.

* We also saw that performing *more* simulations:

    – Took *longer* to finish.

    – Had estimates that *varied less*.

* In this lab, we'll extend our simulation methods to cover situations that are more complex.

    – We'll learn how to estimate their probabilities.

    – We also look at the roll of sampling *with* or *without replacement*.

###**Back to songs**
* <span style="color:firebrick;">**(1) Write and run code simulating a *playlist* of *songs* containing 30 ```"rap"``` songs, 23 ```"country"``` songs and 47 ```"rock"```
songs.**</span>

    – <span style="color:midnightblue;">***Assign* the combined playlist the name ```songs```.**</span>

* <span style="color:firebrick;">**(2) Write and run code simulating choosing a single song 50 times. Then use your simulated draws to estimate the
probability of choosing a *rap* song.**</span>

    – The "true" (theoretical) probability of choosing a *rap* song in this case is ```0.30```.

    – <span style="color:firebrick;">**(3) Write a sentence comparing your estimated probability to the "true" probability.**</span>

###**With or Without?**
* So far, you've selected songs *with replacement*.

    – We called it that, because each time you made a selection, you started with the same
    playlist. That is, you chose a song, wrote down its data, and then placed it back on the
    list.

* It's also possible to select *without replacement* by setting the ```replace``` option in the ```sample```
function to ```FALSE```.

* <span style="color:firebrick;">**(4) Write and run code taking a sample of ```size``` 100 from our playlist of songs *without replacement*. Assign this sample the
name ```without```.**</span> 

    – <span style="color:firebrick;">**(5) Run ```tally(without)``` and describe the output.**</span>

* <span style="color:firebrick;">** (6) Does something similar happen if you sample *with replacement*?**</span>

    – Notice that the tilde ```~``` was not needed with the ```tally``` function. This is because ```without``` was not a variable within a data frame but rather a vector which acts like a lone variable.

* <span style="color:firebrick;">**(7) What happens if ```size = 101``` and ```replace = FALSE```?**</span>
    
###**Sample with? Or without?**

* Imagine the following two scenarios.

    `1. You have a coin with two sides: *Heads* and *Tails*. You're not sure if the coin is fair and so you want to estimate the probability of getting a *Head*.

    `2. A child reaches into a candy jar with 10 *strawberry*, 50 *chocolate* and 25 *watermelon* candies. The child is able to grab three candies with their hand and you're interested in the probability that all three candies will be chocolate.

* <span style="color:firebrick;">**(8) Which of these scenarios would you sample *with replacement* and which would you
sample *without replacement*? Why?**</span>

    – <span style="color:firebrick;">**(9) Write down the line of code you would run to ```sample``` from the candy jar. Assume
    the simulated jar is named ```candies```.**</span>

###**Simulations at work**
* In reality, songs from a playlist are chosen without replacement.

    – This way, you won't hear the same song several times in a row.

* Let's write a more realistic simulation and estimate the probability that if we select two songs at
random, without replacement, that both are rap songs.

    – <span style="color:firebrick;">**(10) Write and run code using the ```do``` function to perform 10 simulated ```sample```s of ```size``` 2, without replacement and *assign* the simulations the name ```draws``` and then ```View``` your file. Use ```set.seed(1)```.**</span>

    – <span style="color:firebrick;">**(11) What are the variable names? What happened in the first simulation? Did any of your 10 simulations contain two rap songs?** </span>   

###**Simulations and probability**
* To estimate the probability from our simulations, we need to find the proportion of times that the
event we're interested in occurs in the simulations.

* In other words, we need to count the number of times the desired events occurred, divided by the
number of attempts we made (the number of simulations).

* The next slides will show you two ways to do this.

###**Counting similar outcomes**

* One way we can estimate the probability of drawing two songs of the *same* genre is to use the
following trick to count the number of *rap* songs in each of the 10 simulations:

        mutate(draws, nrap = rowSums(draws == "rap"))

* <span style="color:firebrick;">**(12) Let’s break down the code above by running each part of the code one piece at a time. As you run each line of code below describe the output.**</span>

        draws == "rap"
        rowSums(draws == "rap")
        mutate(draws, nrap = rowSums(draws == "rap"))

* <span style="color:midnightblue;">**Remember to assign a name to your mutated dataset.**</span>        

###**Counting other outcomes**
* Another method we can use to estimate the probability of complex events is to use the following
2-step procedure:

    `1. Subset or filter the rows of the simulations that match our desired outcomes.

    `2. Count the number of rows in the subset and divide by the number of simulations.

* The result that you obtain is an estimate of the probability that a specific combination of events
occurred.

* We'll see an example of this method on the next slide.

###**Step 1: Creating a subset**
* <span style="color:firebrick;">**(13) Fill in the blanks below to:**</span>

    `1. Create a subset of our simulations when both draws were ```"rap"``` songs.

    `2. Count the number of rows in this subset.

    `3. And divide by the total number of repeated simulations.

            draws_sub <- filter(draws, ___ == "rap", ___ == "rap")
            nrow(___) / ___


###**Estimating probabilities**
* <span style="color:firebrick;">**(14) Write and run code performing 500 simulations of sampling 2 songs from a playlist of 30 ```"rap"```, 23 ```"country"``` and 47 ```"rock"``` songs. You might consider running ```set.seed``` so that your results can be reproduced:**</span>

* <span style="color:firebrick;">**(15) Calculate and write down the estimated probabilities for the following situations:**</span>

    `1. You draw two ```"rap"``` songs.

    `2. You draw a ```"rap"``` song in the first draw and a ```"country"``` song in the 2nd.

* <span style="color:firebrick;">**(16) Create a histogram that displays the number of times a ```"rap"``` song occurred in each simulation. How often were zero rap songs drawn? A single rap song? Two rap songs?**</span>

###**On your own**

* <span style="color:midnightblue;">**Using what you've learned in the previous two labs, answer the following question by performing
two computer simulations with 500 repetitions a piece:**</span>

    <span style="color:firebrick;">***(17) If we draw 5 songs from a playlist of 30 rap, 23 country and 47 rock songs, how does the
estimated probability of all 5 songs being rap songs change if we draw the songs with or without
replacement?***</span>

* For each simulation:

    – <span style="color:midnightblue;">**Create a ```histogram``` for the number of *rap* songs that occurred for each of the 500
    repetitions.**</span>

* <span style="color:firebrick;">**(18) Describe how the distribution of the number of *rap* songs changes depending on if we use
replacement or not.**</span>