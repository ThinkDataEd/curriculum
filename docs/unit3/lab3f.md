##***<u>Lab 3F - Maps</u>***

Directions: Follow along with the slides, completing the questions in <span style="color:midnightblue;">**blue**</span> on your computer, and answering the questions in <span style="color:firebrick;">**red**</span> in your journal.

###**Informative and Fun!**
* Maps are some of the most interesting plots to make because the info represents:

    – Where we live.

    – Where we go.

    – Places that interest us.

* Maps are also helpful to display geographic information.

    – John Snow (the physician, not the character from *Game of Thrones...*) once famously used [a map to discover how cholera was transmitted.](http://commons.wikimedia.org/wiki/File:Snow-cholera-map-1.jpg#mediaviewer/File:Snow-cholera-map-1.jpg "http://commons.wikimedia.org/wiki/File:Snow-cholera-map-1.jpg#mediaviewer/File:Snow-cholera-map-1.jpg")

* In this lab, we'll use ```R``` to create an interactive map of the ```mtns``` data we scraped in [Lab 3E](lab3e.md).

###**Getting ready to map**

* The map we'll be creating will end up in RStudio's *Viewer* pane.

    – Which means you'll need to alternate between building the map and loading the lab.

* You'll find it very helpful, for this lab, to write all of the commands, including the ```load_lab(23)```
command, as an ```R``` Script.

    – This way you can edit the code that builds the map and quickly reload the lab.

###**Load your data!**
* <span style="color:midnightblue;">**In [Lab 3E](lab3e.md) you created a dataset. Load it into Rstudio now by filling in the blank with the file name
of the data.**</span>

        load("___.Rda")

* Didn't finish the lab or save the data file? Ask a friend to share it!

###**Build a Basic Map**
* Let's start by building a basic map!

* <span style="color:firebrick;">**(1) Write and run code using the ```leaflet()``` function and the ```mtns``` data to create the ```leaf``` that we can use for mapping.**</span>

        mtns_leaf <- leaflet(____)

* <span style="color:firebrick;">**(2) Then, write and run code inserting ```mtns_leaf``` into the ```addTiles()``` function and assign the output the name ```mtns_map```.**</span>

* <span style="color:midnightblue;">**Run ```mtns_map``` in the console to look at your basic map with no data displayed.**</span>

    – Be sure to try clicking on the map to pan and zoom.

###**Including our data**
* Now we can add markers for the locations of the mountains using the ```addMarkers()``` function.

* <span style="color:firebrick;">**(3) Fill in the blanks below with the basic map we've created and the values for latitude and longitude.**</span>

        addMarkers(mtns_map = ____, lng = ~____, lat = ~____)

* <span style="color:firebrick;">**(4) Write and run code supplying the ```peak``` variable, in a similar way as we supplied the ```lat``` and ```long``` variables, to the
```popup``` argument and include it in the code above.**</span>

* <span style="color:firebrick;">**(5) Click on a marker within your state of choice and write down the name of the mountain you clicked on.**</span>

###**Colorize**
* Our current map looks pretty good, but what if we wanted to add some colors to our plot?

* <span style="color:firebrick;">**(6) Fill in the blanks below to create a new variable that assigns a color to each mountain based on
the ```state``` it's located in.**</span>

        mtns <- mutate(____, state_colors = colorize(____))

* Now that we've added a new variable, we need to re-build ```mtns_leaf``` and ```mtns_map``` to use it.

    – <span style="color:firebrick;">**(7) Write and run code creating ```mtns_leaf``` and ```mtns_map``` as you did before.**</span>

    – <span style="color:midnightblue;">**Then change ```addMarkers``` to ```addCircleMarkers``` and keep all of the arguments the
    same.**</span>

###**Showing off our colors**
* <span style="color:midnightblue;">**To add the colors to our plot, use the ```addCircleMarkers``` like before but this time include ```color =
~state_colors``` as an argument.**</span>

* It's hard to know just what the different colors mean so let's add a legend.

    – <span style="color:midnightblue;">**First, assign the map with the circle markers as ```mtns_map```.**</span>

    – <span style="color:firebrick;">**(8) Then, fill in the blanks below to place a legend in the top-right hand corner.**</span>

        addLegend(____, colors = ~unique(____), labels = ~unique(____)).
