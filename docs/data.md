extra datasets

### atus

!!! abstract "atus_2020"
      extra_data('atus_2020')

### cdc_2019

!!! abstract "cdc_2019"
      extra_data('cdc_2019')

### colors_ids

!!! abstract "colors_ids"
      extra_data('colors_ids')

### food_ids

!!! abstract "food_ids"
      extra_data('food_ids')

### hiring

!!! abstract "hiring"
      extra_data('hiring')

### retail

!!! abstract "retail"
      extra_data('retail')
      
### stresschill_ids

!!! abstract "stresschill_ids"
      extra_data('stresschill_ids')

      #If you'd like to merge this dataset with your class, follow these steps: <br>
      #Create a subset stresschill_class of your class data without the variables <br>
      # of latitude and longitude <br>
      #This assumes your class set is named p6_stress
      
      stresschill_class <- subset(p6_stress, select = -c(latitude, longitude)) <br>
      #bring in stresschill_ids dataset from IDS archive <br>
      extra_data('stresschill_ids') <br>
      
      #row bind the 2 datasets together <br>
      stresschill_full <- rbind(stresschill_class, stresschill_ids)

### time_exp

!!! abstract "time_exp"
      extra_data('time_exp')

### timeuse_ids

!!! abstract "timeuse_ids"
      extra_data('timeuse_ids')
