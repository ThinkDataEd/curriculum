##***<u>Lesson 6: Statistical Predictions Using One Variable</u>***

###**Objective:**
Students will devise a rule to determine how to choose a winner when predicting the typical height of all
students in a large high school and measure the success of their prediction. They will consider different
measures of success.

###**Materials:**
1. *Heights of Students at a Large High School* handout ([LMR_4.6_HS Student Heights](../IDS_Curriculum_v_5.0/2_IDS_LMRs_v_6.0/IDS_LMR_Unit 4_v_6.0/LMR_4.6_HS Student Heights.pdf))

###**Vocabulary:**
[rule](../../vocabulary/unit4/#rule "a set way to calculate or solve a problem"){ .md-button }

###**Essential Concepts:**

!!! note "Essential Concepts: "  
    Anyone can make a prediction. But statisticians measure the success of their predictions.
    This lesson encourages the classroom to consider different measures of success.

###**Lesson:**
1. Inform the class that for this lesson, our class will help judge a contest held at a particular high
school. This school held a contest in which they selected students at random from a classroom
and reported their height.

2. The information in Steps 3 – 7 is included in the *Heights of Students at a Large High School*
handout ([LMR_4.6](../IDS_Curriculum_v_5.0/2_IDS_LMRs_v_6.0/IDS_LMR_Unit 4_v_6.0/LMR_4.6_HS Student Heights.pdf)).
    <div align="right"><iframe src="https://docs.google.com/viewerng/viewer?url=https://ids-curriculum.idsucla.org/IDS_Curriculum_v_5.0/2_IDS_LMRs_v_6.0/IDS_LMR_Unit 4_v_6.0/LMR_4.6_HS Student Heights.pdf&embedded=true" style=" width:420px;height:400px;" frameborder="0"></iframe><br>[LMR_4.6](../IDS_Curriculum_v_5.0/2_IDS_LMRs_v_6.0/IDS_LMR_Unit 4_v_6.0/LMR_4.6_HS Student Heights.pdf)</div>

3. Our class will help judge a contest held at a particular high school to see who can make the best predictions. Height data for 40 randomly selected students were provided to three teams. Using this data, each team was asked to predict the heights of a random sample of 10 students. Here is the catch: teams were allowed to give only ONE number that had to be used to predict all 10 heights. As the judges of this contest, you will determine the winner.


4. Your job is to determine the winning team. You must come up with two things:

    100. You must support your choice of a winner by using a **rule** for calculating a total score for
    each team.
    
    100. The rule must be applied to each team’s prediction, and you must be able to explain how your rule helped select the winner. For example, do you choose the team with the largest score? The smallest?

6. Here are the predictions of the three teams:

    Team A: 67.9 inches

    Team B: 68.1 inches

    Team C: 70.9 inches

7. Display Dataset A, found on page 1 of the *Heights of Students at a High School* handout ([LMR_4.6](../IDS_Curriculum_v_5.0/2_IDS_LMRs_v_6.0/IDS_LMR_Unit 4_v_6.0/LMR_4.6_HS Student Heights.pdf)).

    **<u>Notes to teacher:</u>**

    100. Students may have to be reminded that negative values with large absolute value are
    larger than positive values with small absolute values (e.g., |-10| is larger than |3| because 10 is larger than 3).

    100. Let students struggle for a little bit. A prompt to get them started: Look at the difference
    between a team's prediction and the actual outcomes (e.g., for the first height, Team A
    predicted 67.9, actual outcome was 70.1, so 67.9-70.1=-2.2=|-2.2|=2.2). They might also need to be nudged
    towards the *sum* of these differences – they need to produce a single score, not 10
    separate scores.

    100. Here are some rules you can “feed” to the class to move them along. Ask them: (a)
    Describe this rule in words. (b) Is it better to get a high score or a low score or some
    other score? (c) Which teams win for each? (Note, some of these rules produce ties).
    
        200. Rule 1: sum(heights-predicted.value == 0) <span style="color:grey"> <br> ***Translated into words: the number of exactly
        correct predictions***</span>
        
        200. Rule 2: sum(heights-predicted.value) <span style="color:grey"> <br> ***Translated into words: the sum of the differences
        between predicted value and the actual heights***</span>
        
        200. Rule 3: sum(abs(heights-estimate)) <span style="color:grey"> <br> ***Translated into words: the sum of the absolute values of
        the deviations***</span>
    
        200. Rule 4: sum((heights-estimate)^2) <span style="color:grey"> <br> ***Translated into words: the sum of the squared deviations***</span>

            **Note:** It is unlikely that students will think of the last two. That’s okay, because
            we will introduce them in a future lesson, but you might want to present one (or
            both) to see what they think about these rules.

8. Allow student teams time to discuss and complete the task for Dataset A.

9. Do not share their responses to Dataset A. Instead, display the following questions:

    100. What if we had a different set of 10 randomly selected students?

    100. Would the same team win?

10. Allow teams to discuss the questions, then share a couple of responses to the questions in the
previous step.

11. Display Dataset B, found on page 2 of the *Heights of Students at a High School* handout ([LMR_4.6](../IDS_Curriculum_v_5.0/2_IDS_LMRs_v_6.0/IDS_LMR_Unit 4_v_6.0/LMR_4.6_HS Student Heights.pdf)),
then have them find the winner using this new sample. Is it the same as they chose before?

    **<U>Note:</u>** We do NOT know the value of the true population mean/ typical value. This is what we are
    really trying to predict.

12. Teams will take turns to share their work as follows:

    100. Which team did you select as the winner using Dataset A?

    100. Explain the method, or **rule**, your team used to declare the winner.

    100. Which team did you select as the winner using Dataset B? Is the winner the same?

    100. Did you use the same rule to select a winner or did it change? If it changed, explain.

13. During the share out, students will take notes about the other teams’ rules in their DS journals.

14. Teams may continue to share at the start of the [next lesson](lesson7.md), if they run out of time.

###**Class Scribes:**
One team of students will give a brief talk to discuss what they think the 3 most important topics of the
day were.