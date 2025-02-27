##**<u>Lab 2F - The Titanic Shuffle</u>**

Directions: Follow along with the slides, completing the questions in <span style="color:midnightblue;">**blue**</span> on your computer, and answering the questions in <span style="color:firebrick;">**red**</span> in your journal.

###**Previously ...**
* In the previous lab, we learned that by using a ```do```-loop and the ```shuffle``` function, we could
simulate randomly shuffling our data many times.

    – This helps us determine how likely it is that a difference between groups is due to chance.

* For this lab, we will extend these ideas to *numerical* variables by using random shuffling and
numerical summaries.

* The question we will investigate in this lab is:

    *Is there any evidence to suggest that those who survived paid a higher fare than those who died?*

###**The Titanic**
* The Titanic was a ship that sank en route to the U.S.A. from England after hitting an Iceberg in
1912.

    – At the time, it was claimed that the Titanic was *unsinkable* ... it wasn't ... because it did.

* <span style="color:midnightblue;">**Use the ```data``` function to load the ```titanic``` passenger and survival data.**</span>

* <span style="color:midnightblue;">**Create a boxplot of the ```fare```s paid by passengers and facet the plot based on whether the
passenger survived or not.**</span>

    – <span style="color:firebrick;">**Based on the plot, do you believe that passengers who paid a higher fare on the Titanic were more likely to survive? Explain why and describe how certain you are of being correct.**</span>

###**The search begins!**
* <span style="color:midnightblue;">**Start your analysis by calculating how much more the *typical* survivor paid than the *typical* non-survivor
in our data.**</span>

* <span style="color:firebrick;">**Based on the distributions of fares paid, which numerical summary that describes the *typical* value might be preferred?**</span>

* <span style="color:firebrick;">**What was the *typical* fare paid by survivors? Non-survivors? How much more did the typical survivor pay?**</span>

###**Do the shuffle!**
* <span style="color:midnightblue;">**Use the ```do``` and the ```shuffle``` functions to shuffle the passenger's survival status 500 times.**</span>

    – Use the previous lab if you need some help on how to do this.

    – For each shuffle, compute each group's ```median``` fare paid.

    – ```Assign``` your shuffled data the name ```shuffled_survival```.

* <span style="color:midnightblue;">**After shuffling your data, use the ```mutate``` function to create a variable called *diff* which is the ```median``` fare of survivors minus the ```median``` fare of non-survivors.**</span>

    – Assign your mutated data the name ```shuffled_survival``` again.

###**Put your simulations to use**
* <span style="color:firebrick;">**By using your shuffled data, answer the research question we posed at the beginning of the lab.**</span>

    *Is there any evidence to suggest that those who survived paid a higher fare than those who died?*

* <span style="color:firebrick;">**Write up your answer as a statistical analysis. Create a plot and explain how the plot supports your conclusion. Be sure to also explain why shuffling your data is important.**</span>

###**Comparing Mean Fares**
* What about if instead of calculating the median fare price for each group after a shuffle, we calculated the mean fare price and took the difference (mean_survivor – mean_victim)?

* <span style="color:firebrick;">**If we did this 500 times, what do you predict the distribution of differences will look like?**</span>

* <span style="color:midnightblue;">**Use the ```do``` and the ```shuffle``` functions to shuffle the passenger’s survival status 500 times.**</span>

    – For each shuffle, compute each group’s mean fare paid.

    – After shuffling your data, use the ```mutate``` function to create a variable called ```diff``` which is the mean fare of survivors minus the mean fare of non-survivors.

* <span style="color:firebrick;">**What does the shuffled data reveal? Does the answer to the research question below change when using the mean fares instead of the median fares?**</span>

    *Is there any evidence to suggest that those who survived paid a higher fare than those who died?*

