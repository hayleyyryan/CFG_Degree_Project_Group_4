// ResultsPage.js
import React from 'react';
import CollapsibleCard from './CollapsibleCard';
import {Text, Container} from '@nextui-org/react';
import './ResultsPage.css'; // Import any additional styles

const Results = () => {
  return (
    <Container className="results-page">
     <Text h1 className="overview-title">Results</Text>
      
      <CollapsibleCard
        title="What trend can we see in the number of non-male protagonists over time?"
        content="Over the ten year period between 2012 and 2022 there has been a rise in non-male protagonists. This has not been a consistent rise, with steep falls in 2016 and 2019. The three year ‘pattern’ of falls was not so steep for 2022 at around 67% non-male protagonists, bucking the cycle of a three year drop. It can be said that the steep falls are also rising over time - which allows for some level of optimism but demonstrates why thinking about character’s genders in an expansive way is so important. It must be mentioned that as non-male groups (Female, Non-Binary and Custom), there has been a more significant rise in female characters within the non-male group. Again there is much work to be done, although the highest character count for Non-Binary being for the Protagonist role is not to be ignored."
      />

      <CollapsibleCard
        title="How many non-male protagonists have there been in the past 10 years?"
        content="We found that countries such as the United States of America and Japan top the list for the number of non-male protagonist characters - having 26 non-male protagonists and 16 non-male protagonists respectively. This is heartening to some degree, the United States of America particularly has significant ‘gaming development weight’ the home to a number of acclaimed developer teams. It was also interesting to see that over the ten year period, six or fewer non-male protagonists were found in the remaining game developer countries in the data set. For example a count of one non-male protagonist for countries such as Austria, Belgium and Denmark demonstrates much is still to be done regarding gender dynamics in video games, these games did contain non-male characters but none prominent enough to be a protagonist. The results for USA and Japan can not be taken for granted as our time-series data shows, significant drops can and do occur - so developers of all countries would benefit significantly from thinking expansively about gender dynamics when storyboarding."
      />

      <CollapsibleCard
        title="What percentage of characters in all games are male?"
        content="We found that males outnumber non-male characters in five of the eight age range categories: Male characters outnumbered non-male characters surpassing 50% for Infant, Elderly, Child and Adult characters. There was an even split for Young adults between Male and Female, not no non-binary characters in this age range. Non male characters only surpass male character percentages for the Unknown and Teenager age range."
      />

      <CollapsibleCard
        title="What roles do characters have depending on their gender?"
        content="So we see some interesting dynamics here: Firstly, we find that Males have higher counts for four out of the six possible game roles. So they are more prevalent as Secondary characters, Protagonists, Main characters and interestingly Main antagonists. The roles that Males do not have the highest count are as Side Kicks - which custom characters have a higher count for, by one count (8). This is the only role for which custom has any counts. Next, we move onto Female characters, who are the next most prevalent - although just over half the amount of characters total compared to Male character count. We discover that female characters tend towards a higher balance of secondary and main characters. Yet, comparatively, Females are still over two times less likely to be a secondary character. There is a narrower comparative window for Female and Males in Main Character roles, yet Males surpass Females by one and a half. Regarding protagonist roles for females in this data set, they are just under three times less likely to be cast a protagonist role than Males. Non-Binary characters saw the lowest character type counts for all categories, the maximum count being for Protagonist (11) being surpassed by Female by five counts and Male by one hundred and thirty four. Non-binary characters are significantly less likely to be cast as Main Characters (187% difference compared to Males) or Secondary Characters (180% difference compared to Males)."
      />

      <CollapsibleCard
        title="Does gender influence a character’s alliance?"
        content="We chose to focus on Male and Female characters for this having larger overall counts. We found 75% of Female characters ally with Protagonists, just over 18% ally with both and only 9% ally with game antagonists. Yet, 61% of Male characters ally with Protagonists in games, only 10% ally with both and just over 27% ally with Antagonists. An interesting finding which may be attributed to female characters being seen as loyal and devoted team players. Alternatively stereotyped views of men as aggressive and calculating may result in their being more likely to be cast in Antagonist roles or within a male centric antagonistic grouping - resulting in a higher count. The lack of non-male characters makes such comparisons complicated to generalise."
      />

      <CollapsibleCard
        title="Is a character more likely to be sexualized due to their gender?"
        content="Our results showed that Females are exceedingly more likely to be sexualized of all gender groups. Females were approximately fourteen times more likely than males to be sexualized and approximately seven times more likely than non-binary characters. This was the first graph that showed Female and Non-Binary consistently higher than their Male counterparts."
      />

      <CollapsibleCard
        title="Which year had the most sexualized clothing in games?"
        content="The year 2017 saw the highest count of sexualized clothing, which interestingly was also the year Tarana Burke’s feminist work and the #MeToo movement for gender equality and women’s sexual safety became more widespread. There was a significant fall in 2018 which may have been a reaction to the #MeToo movement. This sparks significant questions and possible further inquiry into political movements and gaming in the context of gender."
      />

      <CollapsibleCard
        title="Which age range results in a character (across genders) being most likely to function as a romantic interest?"
        content="Female adult characters are most likely to assume the role of romantic interest in our dataset overall. Adult females are five times more likely to be a romantic interest than Adult males. This is followed by Young Adult, although their counts were very few in number (2 for Young Adult Male, 1 for Young Adult Female) Male Young Adults out-numbered Females marginally. Middle Age, Unknown and Young Adult Female (mentioned above) characters each had a count of one for Romantic Interest."
      />
    </Container>
  );
};

export default Results;
