# Gauge Chart

![Gauge Chart Showcase](./img/gauge_chart.gif)

## Overview

The 'Gauge Chart' Lightning Web Component (LWC) offers a dynamic and interactive visualization tool for displaying performance metrics within Salesforce. This component is designed to represent data in a gauge format, providing users with a clear and intuitive way to assess progress towards a target or threshold. By leveraging the Gauge Chart, users can effectively monitor key performance indicators (KPIs) and make informed decisions based on visual data insights.

## How Does It Work?

The Polar Chart displays data as a circular graph, with segments representing different metrics. The chart includes:
- **Actual Value**: The current value of the metric.
- **Target Value**: The target objective value to reach 100% of the gauge.
- **Title**: A specific title for the chart, providing context to the data being displayed.
- **Format Pipe**: An optional function to customize the format of the displayed values (e.g., percentage formatting).

## Usage

### Setting Up the Flow

To use the Polar Chart, you need to set up a flow in Salesforce that retrieves the necessary data and passes it to the LWC. Here’s how you can do it:

1. **Define the `ResultCollection` Variable**:
   - In the Flow Builder, create a new variable named `ResultCollection`.
   - Set the Data Type to `Text`.
   - Ensure "Allow multiple values (collection)" is checked.
   - Mark it as "Available for output" so it can be accessed by the component.

2. **Create a Formula Resource**:
   - Create a new resource of type `Formula`.
   - Set the API Name to something like `LaFormula`.
   - Set the Data Type to `Text`.
   - Use the formula editor to construct your JSON string. For example:
     ```plaintext
     '{"actualValue": "' + TEXT(5) + '", "targetValue": "' + TEXT(10) + '", "title": "Test"}'
     ```
   - This formula constructs a JSON string with the specified values.

3. **Assign the Formula to `ResultCollection`**:
   - Add an `Assignment` element to your Flow.
   - Set the `ResultCollection` variable to the value of the formula resource (`LaFormula`).
   - Ensure the operator is set to `Add`.

4. **Save and Activate the Flow**:
   - Save your Flow.
   - Activate the Flow if it's not already active.

### Using Input Queries

Alternatively, you can use input queries to provide data to the Polar Chart. Here’s how:

1. **Define Input Queries**:
   - Create a list of input queries as a JSON string. Each query should include a key (reference ID) and a value (SOQL query).
   - Example:
     ```json
     [
       {"referenceId": "query1", "query": "SELECT Name FROM Account LIMIT 1"},
       {"referenceId": "query2", "query": "SELECT Name FROM Contact LIMIT 1"}
     ]
     ```

2. **Pass Input Queries to the Component**:
   - Use the `inputQueries` attribute of the Polar Chart component to pass the JSON string of input queries.
   - The component will execute these queries and use the results to populate the chart.
