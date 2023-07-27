!!! warning "Unit 2 Lab Ojectives and Functions:"
        The documentation below lists the new functions that will appear in each lab. The lab itself will explain how to use each function. For more examples, refer to the RStudio Lab Codes and Functions file.

### Lab2A

* Objective: Students will learn to use R to answer statistical questions that can be answered by calculating the mean, median and mean absolute deviation (MAD).

        mean(~x, data)
        median(~x, data)
        add_line(vline)
        MAD(~x, data)



### Lab2B

* Objective: Students will learn learn how to calculate and interpret additional summaries of distributions such as: minimums, maximums, ranges, quartiles and IQRs. They will also write a custom function.

        min(~x, data)
        max(~x, data)
        range(~x, data)
        quantile(~x, data, p)
        iqr(~x, data)
        bwplot(y ~ x, data)
        favstats(~x, data)
        diff(x)
        abs(x)

### Lab2C

* Objective: Students will learn how to simulate a playlist in R using the rep() function,
randomly choose a song from the playlist using the sample() function, create multiple repetitions using the do() function and create the same random event using set.seed().

        rep(x, times)
        sample(x, size, replace)
        do(x)
        set.seed(x)


### Lab2D

* Objective: Students will learn how to Use the mutate() and rowSums() functions to calculate the probability of more complex events.

        rowSums(x)
        /

### Lab2E

* Objective: Students will learn how to use permuted data to gauge how likely an event occurs by chance and investigate the question: _Are women in slasher films more likely to survive until the end of the film than men?_

        No new functions


### Lab2F

* Objective: Students will learn how to use permuted data to gauge whether a numerical summary of the data is significant or occurred by chance and investigate the question: _Is there any evidence to suggest that those who survived paid a higher fare than those who died on the Titanic?_

        No new functions


### Lab2G

* Objective: Students will learn how to use the merge() function to put data together from multiple datasets in order to investigate the question: _How do people’s personality colors and/or sports participation affect their stress levels?_

        merge(x, y, by)


### Lab2H

* Objective: Students will learn how mean and standard deviation affect the shape of a normal curve and recognize when a normal model seems appropriate for real data.


        plotDist(‘norm’, mean, sd)
        histogram(x, fit = “normal”)

### Lab2I

* Objective: Students will use pnorm() to calculate probabilities from a normal distribution, 
rnorm() to simulate random draws from a normal distribution and use qnorm() to calculate quantiles from a normal distribution.

        pnorm(q, mean, sd)
        rnorm(n, mean, sd)
        qnorm(p, mean, sd)
