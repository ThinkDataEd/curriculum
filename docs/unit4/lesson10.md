##***<u>Lesson 10: What's the Best Line?</u>***

###**Objective:**
Students will understand that the mean squared error (MSE) is a way to assess the fit of a linear model. The MSE measures the total squared distances between all the data values from the line of best fit and divides it by the number of observations in the dataset.

###**Materials:**
1. *Arm Span vs. Height* Scatterplot ([LMR_4.9_Arm Span vs Height](../IDS_Curriculum_v_5.0/2_IDS_LMRs_v_6.0/IDS_LMR_Unit 4_v_6.0/LMR_4.9_Arm Span vs Height.pdf)) from [lesson 8](lesson8.md)

2.  *Testing Line of Best Fit* handout ([LMR_4.11_Testing Line of Best Fit](../IDS_Curriculum_v_5.0/2_IDS_LMRs_v_6.0/IDS_LMR_Unit 4_v_6.0/LMR_4.11_Testing Line of Best Fit.pdf))

###**Vocabulary:**
[regression line](../../vocabulary/unit4/#regression-line "a regression line is a line that best describes the behavior of a set of data"){ .md-button }
[observed value](../../vocabulary/unit4/#observed-value "the value that is actually observed (what actually happened)"){ .md-button }
[predicted value](../../vocabulary/unit4/#predicted-value "shows the projected equation of the line of best fit"){ .md-button }

###**Essential Concepts:**

!!! note "Essential Concepts: "
    The regression line can be used to make good predictions about values of *y* for any given
    value of *x*. This works for exactly the same reason the mean works well for one variable: the predictions will
    make your score on the mean squared errors as small as possible.

###**Lesson:**
1. Ask student teams to refer back to the *Arm Span vs. Height* handout ([LMR_4.9](../IDS_Curriculum_v_5.0/2_IDS_LMRs_v_6.0/IDS_LMR_Unit 4_v_6.0/LMR_4.9_Arm Span vs Height.pdf)) but this time have them look at the zoomed out scatterplot.
<img src="../../img/40908.png" />

2. Using their understanding of a line of best fit from The Spaghetti Line lesson and Lab 4A, have them draw (or use strands of spaghetti) what they believe to be the line of best fit for the data.
**<u>Note:</u>** They can use their equations from Lab 4A as a guide but note that it will be difficult to plot decimals on this scatterplot.

3. Ask students: How does this line compare to the lines from the team posters in The Spaghetti Line lesson? <span style="color:grey">***Answers will vary but students may notice that the y-intercepts may be similar or that the overall slope appears similar (they are not writing an equation for the line in step 2, but they may notice where their line intercepts the y-axis and/or the steepness of the line, i.e., slope).***</span>

4. Reveal the equation of the line of best fit for the Arm Span vs. Height data and ask students to
check their equations from Lab 4A:

    <center><img src="https://latex.codecogs.com/gif.latex?\widehat{height}=0.7328(armspan)&plus;17.4957" title="\widehat{height}=0.7328(armspan)+17.4957" /></center>

    **<u>Note:</u>** Any time a *hat* is on top of a variable, this means we are making “predicted values” of that
    variable.

5. Whose equation came closest to the equation of the regression line? Ask the student whose
equation came closest to share how he/she came up with the equation.

6. Inform students that the equation of the line is a rule that predicts the height based on a second
variable, in this case, arm span. Data points are **observed values** and points on the line are **predicted values**.

7. Team discussion question:

    **Using the equation of the line of best fit provided, how can we predict the height of
    a student whose arm span is 67 inches?**

    100. What was the actual height for someone with an arm span of 67 inches? <span style="color:grey">***Answer: There are three points on our Arm Span vs Height scatterplot at an arm span of 67 inches; 66-inch height, 67-inch height, and 70-inch height.***</span>

    100. How close was our predicted height? <span style="color:grey">***Answer: Our line of best fit predicted that someone with an arm span of 67 inches has a height of 66.5933 inches, which rounded to the nearest whole number is 67 inches. This is pretty close as it matches one of the possible heights for someone with an arm span of 67 inches in our data.***</span>

8. Remind students know that lines of best fit are also known as **regression lines** and they are models that
can be used to make predictions.

9. Inform students that data scientists have a way of finding the best line. They choose the line so that the mean squared distances between the points and the line is as small as possible. Discuss with students:

    100. What methods have we used so far? <span style="color:grey">***Answer: We've used Mean Squared Error and Mean Absolute Error [(Lesson 7)](lesson7.md)***</span>

    100. When is it appropriate to use each method? <span style="color:grey">***Answer: It was best to use Mean Squared Error when we were looking at mean and Mean Absolute Error when we were looking at median.***</span>

10. Distribute the *Testing Line of Best Fit* handout ([LMR_4.11](../IDS_Curriculum_v_5.0/2_IDS_LMRs_v_6.0/IDS_LMR_Unit 4_v_6.0/LMR_4.11_Testing Lines of Best Fit.pdf)). Students will calculate MSE by using the distances between the actual heights (the points) and their predicted heights (the points on the line) of two different lines. They do this so that they can understand what those distances mean - that together they form our "error" that help us determine the best fitting line.

    <div align="right"><iframe src="https://docs.google.com/viewerng/viewer?url=https://curriculum.idsucla.org/IDS_Curriculum_v_5.0/2_IDS_LMRs_v_6.0/IDS_LMR_Unit 4_v_6.0/LMR_4.11_Testing Line of Best Fit.pdf&embedded=true" style=" width:420px;height:400px;" frameborder="0"></iframe><br>[LMR_4.11](../IDS_Curriculum_v_5.0/2_IDS_LMRs_v_6.0/IDS_LMR_Unit 4_v_6.0/LMR_4.11_Testing Line of Best Fit.pdf)</div>

11. Discuss with students:

    100. What did you have to do to your MSE value to make it useable for interpretation? <span style="color:grey">***Answer: We had to take the square root of our MSE value in order to convert it back to inches.***</span>

    100. Which linear model was the better fit? How do you know? <span style="color:grey">***Answers will vary but this is where students should compare the MSE values - a smaller MSE indicates a smaller error, and therefore a better fit.

    **<u>Note:</u>** Students may ask for an easier and/or faster way to calculate MSE. They will be using RStudio to calculate MSE in the next lab.

###**Class Scribes:**
One team of students will give a brief talk to discuss what they think the 3 most important topics of the
day were.

###<p style="background: black; color: white; text-align: center;">**Homework & Next Day**</p>
[<u>***LAB 4B:…***</u>](lab4b.md)

[<u>***LAB 4C:***</u>](lab4c.md)

Complete [Labs 4B](lab4b.md) and [4C](lab4c.md) prior to [Lesson 11](lesson11.md).