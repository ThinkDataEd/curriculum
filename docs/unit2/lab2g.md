##**<u>Lab 2G - Getting It Together</u>**

Directions: Follow along with the slides, completing the questions in <span style="color:midnightblue;">**blue**</span> on your computer, and answering the questions in <span style="color:firebrick;">**red**</span> in your journal.

###**Putting data together**
* In the labs so far, we've only ever looked at individual data files.

    – But often times, we gain additional insights by including additional information from a separate dataset.

* In this lab, we will learn how to merge information from our *personality color* data with our
*stress/chill* data.

* <span style="color:midnightblue;">***Export*, *upload*, *import* your *Personality Color* dataset and name it ```colors```.**</span>

* <span style="color:midnightblue;">**Then, *export*, *upload*, *import* your *Stress/Chill* dataset and name it ```stress```.**</span>

###**Looking at Stress/Chill**
* We would like to analyze the research question:

    *How do people's personality colors and/or sports participation affect their stress levels?*

* We already have data about *personality color* and a separate dataset about *stress*.

    – What we don't have is a single dataset with information from both ... yet.

* We'll start then by strategizing how to merge our data together.

###**Deciding how to merge**
* Before we merge data, we need to decide *how* we plan to merge it:

* We can *stack* our datasets, that is, take one dataset's rows and add them to the bottom of the
other dataset.

* We can also *join* our datasets horizontally. This is where we take one dataset's columns and
add them to the end of the other dataset's columns based on matching an *ID* variable.

    – The *ID* variable will have entries that we use to *match* observations in both datasets.

* <span style="color:firebrick;">**To answer the research question, would it make more sense to *stack* or *join*
our ```colors``` and ```stress``` data?**</span>

###**Finding variables in common:**
* Look at the ```names``` of the variables in each dataset.

    – To merge different datasets together, we need to find variables they have in common.

* <span style="color:firebrick;">**Which variables do the datasets have in common?**</span>

* <span style="color:firebrick;">**Which variable would make sense to merge the datasets together with? Why not the others?**</span>

###**Caution required**
* Whether *stacking* or *joining*, we need to be careful when we merge data:

* When *stacking* data, we need to be absolutely certain that the variables we're stacking represent
the exact same measurements.

    – We wouldn't want to stack ```height``` in meters and ```height``` in inches, for instance (without
    converting one to the other).

* When *joining* data, we need to make sure that the *id* variable in our primary dataset matches to
*one and only one* observation in the joining data.

    – Otherwise, ```R``` won't know which observation to match to.

###**Getting ready**
* Our goal is to add the variables from the ```colors``` data onto the ```stress``` data.

* <span style="color:midnightblue;">**Start by ensuring that every ```user.id``` in the ```colors``` data is unique.**</span>

    – <span style="color:midnightblue;">**If there's a duplicate, have your teacher remove the duplicate from your class's Web Response Manager and then re-*export*, *upload*, *import* your ```colors``` data.**</span>

* <span style="color:firebrick;">**After we add the data from *colors* to *stress*, how many rows should our merged data
have? Write this number down.**</span>

###**Putting them together**
* We can use the ```merge``` function to *join* our datasets together using the variables that appear in
both sets.

* <span style="color:midnightblue;">**Fill in the blanks below to join the information from the ```colors``` data onto the ```stress``` data.**</span>

        merge(____, ____, by = "____")

* <span style="color:midnightblue;">**```Assign``` this ```merge```d dataset the name ```stress_colors```.**</span>

    – Make sure your data has the same number of observations that you wrote down on the
    previous slide.

###**Saving your data:**
* <span style="color:midnightblue;">**```View``` your merged data and make sure nothing appears to be blatantly wrong with it.**</span>

* <span style="color:firebrick;">**Why didn't we stack the rows of data instead?**</span>

* <span style="color:firebrick;">**What happens if you swap the order of the datasets in the ```merge``` function?**</span>

* <span style="color:midnightblue;">**Use the code below to ```save``` our ```stress_colors``` data for later use.**</span>

        save(stress_colors, file = "stress_colors.rda")

* <span style="color:midnightblue;">**Be sure to look in the *Files* tab to make sure your data was saved.**</span>

###**Moving on**
* In the next lab, we'll begin analyzing our merged data. In the meantime:

* <span style="color:midnightblue;">**Make a few plots using variables from the ```stress``` data and *facet* or *group* the plots based on variables from the ```colors``` data.**</span>

    – <span style="color:firebrick;">**Write down the most interesting discovery you make by just exploring your data. Write out how you found your discovery and interpret what it means for the
    people in your class.**</span>

* <span style="color:firebrick;">**With our *colors* data, we could answer questions about the *typical* color scores in your class. Why can we no longer answer this question in our ```stress_colors``` data?**</span>