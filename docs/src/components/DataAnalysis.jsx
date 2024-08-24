import React, { useState } from 'react';
import { Collapse, Text, Container, Spacer, Card, Link } from '@nextui-org/react';

const DataAnalysis = () => {
  const [activeKey, setActiveKey] = useState(null);

  const handleToggle = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  return (
    <Container className="data-analysis">
     <Text h1 className="overview-title">Data Analysis</Text>
     
      <Spacer y={1} />
      <Card css={{ p: "$6", mw: "800px", margin: "0 auto", mb: "$6" }}>
        <Card.Body>
          <Text>
            Our initial task consisted of brainstorming platforms that offer reliable, accurate, and up-to-date data on video characters and gender. Websites such as IGDB and Steam offer APIs, but these were not all accessible. In some cases, gender endpoints were not offered, and in other cases, gender endpoints only allowed ‘post’ requests, making ‘get’ requests for data impossible.
          </Text>
        </Card.Body>
      </Card>

      <Card css={{ p: "$6", mw: "800px", margin: "0 auto" }}>
        <Collapse.Group>
          <Collapse title="Data Collection" expanded={activeKey === '1'} onClick={() => handleToggle('1')}>
        <Text>
          We thus chose the <strong>‘Gender Representation in Video Games’ Kaggle dataset</strong> (contributed by Brisa?). Consisting of three .csv files, this dataset is ideal for our analysis, containing timely data from sixty-five video games between 2012 and 2022. The video games consist of approximately five highly rated or popular titles for each year within this ten-year period.
        </Text>
        <Spacer y={1} />
        <Text>
          It must be mentioned that the dataset was acquired through accessing the <strong>GitHub API</strong>. This allowed us to apply our knowledge of interacting with APIs in the project.
        </Text>
        <Spacer y={1} />
        <Text>
          The GitHub API was accessed using Jupyter Notebook’s interactive environment. The <code>%pip install Kaggle</code> command was executed, and a token was granted which we used for authentication and API endpoint access.
        </Text>
        <Spacer y={1} />
        <Text>
          We were thus able to access three tables: <strong>Games, Characters, and Sexualisation</strong>.
        </Text>
        <Spacer y={1} />
        <Text h4>Metadata Summary</Text>
        <Text>
          <strong>Games Dataset:</strong> Contains 24 columns and 64 rows, including:
          <ul>
            <li><strong>Title:</strong> string</li>
            <li><strong>Release Date:</strong> date</li>
            <li><strong>Genre:</strong> string</li>
            <li><strong>Developer:</strong> string</li>
            <li><strong>Country:</strong> string</li>
            <li><strong>Protagonist:</strong> int</li>
            <li><strong>Percentage Non-Male Characters:</strong> float</li>
            <li><strong>Female Team:</strong> int (number of female developer team members)</li>
            <li><strong>Average Review:</strong> float (average review for the game)</li>
          </ul>
        </Text>
        <Spacer y={1} />
        <Text>
          <strong>Characters Dataset:</strong> Contains 12 columns and 637 rows, including:
          <ul>
            <li><strong>Character’s Name:</strong> string</li>
            <li><strong>Gender:</strong> string</li>
            <li><strong>Game:</strong> foreign key, string</li>
            <li><strong>Character Age Range:</strong> string</li>
            <li><strong>Character Playability:</strong> int (whether character is playable)</li>
            <li><strong>Sexualization:</strong> int (rating out of four based on metrics in Sexualization dataset)</li>
            <li><strong>Character Side:</strong> string (character's alliance)</li>
            <li><strong>Character Relevance:</strong> string (position in the game's hierarchy)</li>
            <li><strong>Romantic Interest:</strong> string (whether the character is a romantic interest)</li>
          </ul>
        </Text>
        <Spacer y={1} />
        <Text>
          <strong>Sexualization Dataset:</strong> Contains 6 columns and 637 rows, including:
          <ul>
            <li><strong>Character ID:</strong> primary key, string</li>
            <li><strong>Sexualized Clothing:</strong> boolean (0 - no, 1 - yes)</li>
            <li><strong>Trophy:</strong> boolean (whether character functions as a prize)</li>
            <li><strong>Damsel in Distress:</strong> boolean (whether character is cast as helpless)</li>
            <li><strong>Sexualized Cut Scenes:</strong> boolean (whether character’s cutscenes focus on sexualization)</li>
          </ul>
        </Text>
        <Spacer y={1} />
        <Text>
          The above list has narrowed down the columns to those more relevant to our research purpose. For an extensive guide to the dataset’s metadata, please click the link <a href="#">here</a>.
        </Text>
          </Collapse>



          <Collapse title="Research Questions" expanded={activeKey === '2'} onClick={() => handleToggle('2')}>
          <p>
          As we reviewed the dataset and its structure, a number of questions arose. 
          For further details, refer to our <a href="/link-to-questions-doc">questions document</a>.
        </p>
        <ul className="custom-numbered-list">
          <li>What trend can we see in the number of non-male protagonists over time?</li>
          <li>How is this trend reflected when analysing game developer countries?</li>
          <li>How many non-male protagonists have there been in the past 10 years?</li>
          <li>What percentage of characters in all games are male?</li>
          <li>What roles do characters have depending on their gender?</li>
          <li>Does gender influence a character’s alliance?</li>
          <li>Is a character more likely to be sexualized due to their gender?</li>
          <li>Which year had the most sexualized clothing in games?</li>
          <li>Which age range results in a character (across genders) being most likely to function as a romantic interest?</li>
        </ul>
          </Collapse>

          <Collapse title="Exploratory Analysis" expanded={activeKey === '4'} onClick={() => handleToggle('4')}>
          <Text>
              Following the cleaning of our data set, the next phase of Exploration was ready! As the inconsistencies, alterations, and initial checks had been completed, we were able to better explore and gather useful insights from our dataset.
            </Text>
            <Text>
              Being cautious not to duplicate or overwrite the work of others, we initially worked on each dataset independently, merging them where needed. The Sexualization data frame offered great insights independently, however, the merge with Character data was more immediate as it had a number of dependencies on the character data set— for example, full character name being present on the Character data frame yet absent in Sexualization.
            </Text>

            <Text h4>Narration of Data Findings</Text>
            <Text>
              Based on our initial research questions, as well as the findings of the data exploration, we were able to create a comprehensive narration. Due to the short amount of time given for the presentation, we had to limit our findings to questions that corresponded most to this narrative. We decided to divide the findings into main and sub-findings, with the main part providing an overview on non-male representation in video games (e.g., non-male protagonists by year), and the sub-findings giving more detailed insights (e.g., sexualization of a character). This step was important to prepare a structured presentation and focus on relevant visualizations.
            </Text>
          </Collapse>

          <Collapse title="Data Visualization Process" expanded={activeKey === '5'} onClick={() => handleToggle('5')}>
          <Text>
              Based on the findings from the data exploration and the narration outline, we were able to create insightful visualisations using Matplotlib, a library for visualisations in Python, as well as Seaborn, a library that builds on Matplotlib.
            </Text>
            <Text>
              Through these, we were able to further explore the data and deepen the data exploration process. By analysing the graphs, developments and patterns became more clear and we were able to draw clear and precise conclusions to answer our initial questions.
            </Text>
            <Text>
              When editing and refining the visualisations, we realised that some of them were irrelevant or did not make sense, hence, we adjusted the design, and choice of the data and plot. To make the graphs visually pleasant, we chose the same colour scheme for all visualisations, as well as similar overall designs and labelling.
            </Text>
          </Collapse>
        </Collapse.Group>
      </Card>
    </Container>
  );
};

export default DataAnalysis;
