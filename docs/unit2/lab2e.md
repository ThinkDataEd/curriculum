##**<u>Lab 2E - The Horror Movie Shuffle</u>**

Directions: Follow along with the slides, completing the questions in <span style="color:midnightblue;">**blue**</span> on your computer, and answering the questions in <span style="color:firebrick;">**red**</span> in your journal.

###**Playing with permutations**
* There is a common belief that women in *slasher* films are more likely to survive than men.

* This lab will focus on the statistical investigative question: *Are women in slasher films more likely to
survive until the end of the film than men?*

* To answer this question, we'll learn how to use permuted data to gauge how likely an event
occurs by chance.

* <span style="color:midnightblue;">**To begin, use the ```data``` function to load the ```slasher``` data file.**</span>

    – The data contains information about 485 characters from a random sample of 50
    *slasher* horror films.

###**Initial thoughts...**
* To familiarize yourself with the data, answer the following:

    – <span style="color:firebrick;">**How many variables and observations are contained in the data and what are
    the possible values of the variables?**</span>

    – <span style="color:firebrick;">**Which gender had more survivors? Write down a few sentences as to how
    you came to your conclusion. Be sure to look at both the *counts* and
    *percentages* of survivors in each group before deciding.**</span>

    – <span style="color:firebrick;">**Calculate the difference between the percentage of females who survived and
    the percentage of males who survived. Is the difference large enough to
    conclude that women tend to survive more often than men?**</span>

###**Tally whoa ... !**

* Something you might have noticed is that these two lines of code aren't equivalent:

        tally(~gender | survival, data = slasher, margin = TRUE)
        tally(~survival | gender, data = slasher, margin = TRUE)

* The first line of code takes the group of *survivors* and tells us how many of them were ```Male``` or ```Female```.

* The other takes the group of *females / males* and tells us how many of them ```Dies``` or ```Survives```.

* <span style="color:firebrick;">**The last question on the previous slide can be answered using the line of code below. Why?**</span>

    – Pro-tip: Include the option ```format = "percent"``` to obtain a two-way table with percentages.
    
     
            tally(~survival | gender, format = "percent", data = slasher, margin = TRUE)

            ##           gender
            ## survival      Female      Male
            ##   Dies      77.47748  86.69202
            ##   Survives  22.52252  13.30798
            ##   Total    100.00000 100.00000

###**Examining differences**
* When we're comparing the difference between two quantities, such as survival rates of
slasher films, it can be difficult to decide how *different* two values need to be before we can
conclude that the difference didn't just happen by chance.

    – To help us decide when a difference is not due to chance, we'll use repeated
    random shuffling.

* By using repeated random shuffling, we'll estimate how often our *actual* difference occurs by
*chance*.

###**Do the shuffle!**
* When we shuffle data, we use our original dataset as a starting point.

    – <span style="color:firebrick;">**Run the following and write down the resulting table on a piece of paper.**</span>

        tally(~survival | gender, data = slasher)

* <span style="color:firebrick;">**Now run the following to randomly reassign each ```survival``` status to each observation.
Compare the resulting table to the one you wrote down.**</span>

        tally(~shuffle(survival) | gender, data = slasher)

###**Let's compare ...**
* <span style="color:firebrick;">**How many people, in total, survived the slasher film before shuffling? How many
people survived after shuffling?**</span>

* <span style="color:firebrick;">**How has shuffling our data changed the percentage of women who survived
compared to men who survived?**</span>

    – <span style="color:firebrick;">**Is the difference in percentages from your shuffled data larger or smaller than
    the difference from the original data? Interpret what this means.**</span>

* <span style="color:firebrick;">**Explain why shuffling our data one time is not enough to decide if the difference seen
in our *actual* data occurs by chance or not.**</span>

###**Detecting differences**
* To help us decide if the difference in percentages in our *actual* data occurs by chance or not,
we can use the ```do()``` function to shuffle our data many times and see how often our *actual*
difference occurred by chance.

* <span style="color:midnightblue;">**Run the following lines of code:**</span>

        set.seed(7)

        shuffled_outcomes <- do(10) * tally(~shuffle(survival) | gender, 
                                    format = "percent", 
                                    data = slasher)

        View(shuffled_outcomes)

* <span style="color:firebrick;">**In how many simulations did a higher percentage of males survive than females?**</span>

* <span style="color:firebrick;">**What is the largest difference in percentages of survival between males and females?**</span>

* <span style="color:firebrick;">**What patterns are emerging from these simulations?**</span>

* <span style="color:midnightblue;">**Ten simulations is not enough. Use the code above and perform 500 shuffles. ```Assign``` your 500 shuffles the same name ```shuffled_outcomes```. Use ```set.seed(1)```.**</span>

###**Now what?**

* The next step to find out how often our *actual* difference occurs by chance is to compare it
to the differences in our shuffled data.

* To compute the differences for each shuffle we can use the ```mutate``` function.

    – <span style="color:midnightblue;">**Fill in the blanks to add a new column that contains the difference between ```Survives.Female``` and
    ```Survives.Male``` to our ```shuffled_outcomes``` data.**</span>

            shuffled_outcomes <- mutate(shuffled_outcomes, diff = ____ - ____)

###**Time to decide**
* <span style="color:midnightblue;">**Create a ```histogram``` of the ```difference```s in our ```shuffled_outcomes``` data. Based on your plot, answer the following:**</span>

    – <span style="color:firebrick;">**What was the typical difference in percentages between men and women survivors?**</span>

* <span style="color:midnightblue;">**Include a vertical line in your histogram of the actual difference by running the code below:**</span>    

        add_line(vline = 22.52252 - 13.30798)

* <span style="color:firebrick;">**Does the actual difference occur very often by chance alone?**</span>        

* <span style="color:firebrick;">**Does ```gender``` play a role in whether or not a character will survive in a horror film?
Explain your reasoning.**</span>

* <span style="color:firebrick;">**If you wanted to survive in a horror film, would you want to play a female character or
a male character?**</span>

###**Summary**
* By shuffling the ```survival``` label, we made it so that the proportion of males and females
who survived the slasher film was random.

    – The males and females survived by chance alone.

* If surviving the film occurred purely by chance, then most of the time the difference in
survival proportions was close to zero.

    – Notice how most values in the histogram occur close to zero.

* When we look to see how often our actual difference occurs in our shuffled data, if the
actual difference doesn't occur very often then perhaps there is something more going on
than just chance alone ...

###**On your own**
* <span style="color:midnightblue;">**Carry out another 500 simulations but this time shuffle the ```gender``` variable instead of the
```survival``` variable.**</span>

    – Include the code ```set.seed(1)``` before your 500 simulations to make your answer
    reproducible.

* <span style="color:firebrick;">**Does shuffling the ```gender``` variable instead of the ```survival``` variable change your
answer to the question?**</span>
* <span style="color:firebrick;">**Does ```gender``` play a role in whether or not a character will
survive in a horror film?* **</span>

    – <span style="color:firebrick;">**Why or why not?**</span>