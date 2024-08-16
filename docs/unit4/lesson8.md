##***<u>Lesson 8: Statistical Predictions Using Two Variables</u>***

###**Objective:**
Students will learn how to predict height using arm span data - and vice versa - visually on a scatterplot.

###**Materials:**
1. *Arm span vs. Height Scatterplot* ([LMR_U4_L8](../IDS_Curriculum_v_5.0/2_IDS_LMRs_v_6.0/IDS_LMR_Unit4_v_7/LMR_U4_L8.pdf))

    **<u>Note:</u>** This handout will be referenced in subsequent lessons.

2. Assorted color markers (dry erase or overhead) — see step 3 of lesson

3. Overhead or LCD projector

###**Essential Concepts:**

!!! note "Essential Concepts: " 
    When predicting values of a variable *y*, and if *y* is linearly associated with *x*, then we can get
    improved predictions by using our knowledge about *x*. For every value of *x*, find the mean of the *y* values for that value of *x*. If the resulting mean follows a trend, we can model this trend to generalize to unseen values of *x*.

###**Lesson:**
1. Remind students that in the previous lessons they were working with height data to predict the
typical height of all the students at a large high school, implementing a method used by statisticians to help them make good predictions.

2. In addition to the height data, it turns out that each student’s arm span data was also collected and recorded.

3. Display the *Arm Span vs. Height Scatterplot* ([LMR_U4_L8](../IDS_Curriculum_v_5.0/2_IDS_LMRs_v_6.0/IDS_LMR_Unit4_v_7/LMR_U4_L8.pdf)) on a white board or overhead projector
(you will write on the board or the transparency later in the lesson — see step 9 below).
    <div align="right"><iframe src="https://docs.google.com/viewerng/viewer?url=https://ids-curriculum.idsucla.org/IDS_Curriculum_v_5.0/2_IDS_LMRs_v_6.0/IDS_LMR_Unit4_v_7/LMR_U4_L8.pdf&embedded=true" style=" width:420px;height:400px;" frameborder="0"></iframe><br>[LMR_U4_L8](../IDS_Curriculum_v_5.0/2_IDS_LMRs_v_6.0/IDS_LMR_Unit4_v_7/LMR_U4_L8.pdf)</div>

4. Distribute the *Arm Span vs. Height* handout ([LMR_U4_L8](../IDS_Curriculum_v_5.0/2_IDS_LMRs_v_6.0/IDS_LMR_Unit4_v_7/LMR_U4_L8.pdf)). Students will refer to this handout again later in a subsequent lesson.

5. In teams, ask students to analyze the plot and discuss the following questions:

    • What kind of plot is this? <span style="color:grey">***Answer: Scatterplot.***</span>

    • How many variables are displayed in this plot? <span style="color:grey">***Answer: Two variables.***</span>

    • Which variable is shown on the x-axis? On the y-axis? <span style="color:grey">***Answer: Arm span is shown on the x-axis and height is shown on the y-axis.***</span>

    • What is this plot showing? <span style="color:grey">***Answer: It is showing the relationship between a person’s height and the person’s corresponding arm span measurement.***</span>

    • How can I find out the height of the person whose arm span measures 68 inches? <span style="color:grey">***Answer: Find 68 on the x-axis. Then find the data point located at 68. Place finger on the data point and track its location on the y-axis. The height is also 68 inches.***</span>

6. Using *Talk Moves*, conduct a class discussion of the questions in step 5 above.

7. Remind students that we’ve learned that the mean is the best way of predicting heights. The
mean heights of these people is 64 inches.

8. Ask the students: Do you think we can do better? Is 64" a good prediction for someone whose arm
span is 72”? What about 60”? How can you come up with a rule for determining the best
predicted height *if you know the person’s arm span?*

    **<u>Note to teacher:</u>** Lead students to realize that they can do this by “subsetting” the data for the fixed *x* value. For example, if arm span is 60", they should consider only the heights of people whose arm span is 60" and find the mean.

9. In teams, ask students to approximate the mean height for people whose arm span is 60", 64", 68", and 72".

    **<u>Note:</u>** Because the plot does not clearly show duplicate ordered pairs, an approximation is sufficient at this point. You may have students use RStudio to calculate the mean height for the specific armspans. Refer to the OPTIONAL section at the end of the lesson.

10. Then plot these points on the graph. We will use this later – the points should be roughly along a straight line. <br> <u>**Note:**</u> These arm spans have a range of height values associated with them. Students may take a mean of the heights, but answers may vary.

11. Ask students if they see any patterns or rules they can use from this to help with predictions.
Because there were multiple height values associated with each arm span length, you will likely get multiple answers from students. The goal now is to come up with a rule that suggests a
plausible height value for anyone with a particular arm span.

12. A sentence starter to guide students: If a person has a bigger arm span, then we should predict <u>&nbsp;&nbsp;&nbsp;&nbsp;</u>[a bigger height]<u>&nbsp;&nbsp;&nbsp;&nbsp;</u>. If time permits, you might push them to be more precise. Let’s take someone who has a 60-inch arm span. You predicted a height of <u>&nbsp;&nbsp;&nbsp;&nbsp;</u><u>&nbsp;&nbsp;&nbsp;&nbsp;</u>. How much should we increase our prediction for people with a 62-inch arm span? Can you do this without subsetting the data and re-calculating?

13. Conceptually, students are wrestling with the notion of the slope of the regression line but there’s no need to point this out just yet. <br> Important: The equation of the line of best fit will be revealed in [Lesson 9](lesson9.md).

    **<u>OPTIONAL FOR ITEM 9:</u>** If you want to obtain the exact mean height for each arm span value in step 9 above, copy the code below and run it in an R Script.

        xyplot(height~armspan, data = arm_span, 
            scales = list(x = list(at = seq(58, 72, 1)), y = list(at = seq(52, 72, 1))), 
            xlab = "Arm span (inches)", ylab = "Height (inches)")

        armspan_60 <- filter(arm_span, armspan==60)
        mean(~height, data = armspan_60)
        #62.66667

        armspan_64 <- filter(arm_span, armspan==64)
        mean(~height, data = armspan_64)
        #64

        armspan_68 <- filter(arm_span, armspan==68)
        mean(~height, data = armspan_68)
        #68

        armspan_72 <- filter(arm_span, armspan==72)
        mean(~height, data = armspan_72)
        #71.5

        #Base R Code
        #syntax to create a scatterplot using base R
        plot(arm_span$armspan, arm_span$height)

        #Points function in base R is more user friendly
        points(60, 62.6667, col = "red", cex = 2)
        points(64, 64, col = "red", cex = 2)
        points(68, 68, col = "red", cex = 2)
        points(72, 71.5, col = "red", cex = 2)

###**Class Scribes:**
One team of students will give a brief talk to discuss what they think the 3 most important topics of the day were.