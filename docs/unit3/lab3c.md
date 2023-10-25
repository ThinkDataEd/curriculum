##***<u>Lab 3C - Random Sampling</u>***

Directions: Follow along with the slides, completing the questions in <span style="color:midnightblue;">**blue**</span> on your computer, and answering the questions in <span style="color:firebrick;">**red**</span> in your journal.

###**Learning by sampling**
* In many circumstances, there's simply no feasible way to gather data about everyone in a
*population*.

    – For example, the Department of Water & Power (DWP) wants to determine how
    much water people in Los Angeles use to take a shower. They've created a survey
    to pass out to collect this information.

    – <span style="color:firebrick;">**Write down two reasons why getting *everyone* in Los Angeles to fill out the
    survey would be difficult. Also, write a sentence why the DWP might consider
    using a sample of households instead.**</span>

* In this lab, we'll learn how *sampling methods* affect how *representative* a sample is of a
*population*.

###**Loading a population**
* In previous labs, we used the ```cdc``` data as a sample for young people in the United States.

    – In this lab, we'll consider these survey respondents to be our population.

* <span style="color:midnightblue;">**Load the ```cdc``` data into ```R``` and fill in the blanks to take a *convenience* sample of the first 50
people in the data:**</span>

        s1 <- slice(____, 1:____)

* <span style="color:firebrick;">**Why do you think we call this method a *convenience* sample?**</span>

###**Comparing your convenience sample**
* A convenience sample is a sample from a population where we collect data on subjects
because they're easy-to-find.

* <span style="color:midnightblue;">**Using your convenience sample, create a ```bargraph``` for the number of people in each ```grade```.**</span>

    – <span style="color:firebrick;">**Do you think the distribution of ```grade``` for your sample would look similar
    when compared to the whole ```cdc``` data?**</span>

    – <span style="color:firebrick;">**Which groups of people do you think are over or under represented in your
    convenience sample? Why?**</span>

* <span style="color:midnightblue;">**Create a ```bargraph``` for ```grade``` using the ```cdc``` data.**</span>

    – <span style="color:firebrick;">**Compare the distributions of the ```cdc``` data and your convenience sample and
    write down how they differ.**</span>

###**Using randomness**
* <span style="color:midnightblue;">**Fill in the blanks below to create a sample by randomly selecting 50 people in the ```cdc``` data,
without replacement. Call this new sample ```s2```:**</span>

        ___ <- sample(___, size = ___, replace = ___)

* <span style="color:firebrick;">**Write a sentence that explains why you think the distribution of ```grade``` for this *random
sample* will look more or less similar to the distribution from the whole ```cdc``` data.**</span>

* <span style="color:midnightblue;">**Create a ```bargraph``` for ```grade``` based on this *random sample* to check your
    prediction.**</span>

###**Increasing sample size**
* <span style="color:midnightblue;">**Create ```bargraph```s for ```grade``` based on each of the following sample sizes: 10, 100, 1,000,
10,000.**</span>

    – Compare each distribution to that of the population.

* <span style="color:firebrick;">**How do the distributions change as the size of the sample increases? Why do you
think this occurs?**</span>

* <span style="color:midnightblue;">**```tally()``` the proportion of ```grade```s for your *convenience* sample and all your *random*
samples.**</span>

    – <span style="color:firebrick;">**Which set of proportions looks most similar to the proportions of the
    population?**</span>

###**Lessons learned**
* The mean, or proportion, from a *random* sample might not always be closer to that of the
true population when compared to a *convenience* sample.

* However, as sample sizes get larger:

    – *Random* samples will tend to be better estimates for the population.

    – With *convenience* samples, this might not be the case.

* <span style="color:firebrick;">**Write down a reason why estimates based on *convenience* samples might not
improve even as sample size increases.**</span>