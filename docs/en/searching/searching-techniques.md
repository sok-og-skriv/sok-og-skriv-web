---
title: "Searching techniques"
date: "2022-07-18"
---

# Searching techniques

When searching academic databases, it is useful to be familiar with basic searching techniques. In this section, these will be explained.

## Free text searching

Free text search, or search for text words, is the most common way to search. Your search terms are matched to the content of a reference, often on words in the title, the summary, and keywords. It is important not to be too specific and not too general.

**Example**

If you do a free text search on the word "preschool", you will find documents with the word "preschool" in the title, summary, or as a keyword. Because different terms can be used for the same phenomenon, it is important to use multiple search terms. Words such as kindergarten, daycare, nursery school, etc. are all synonyms that can be used in a text about the preschool level.

An alternative to a free text search is searching using a controlled vocabulary.

### Phrase searching

If your search term consists of more than one word, such as adapted education, you need to use quotation marks when searching: "adapted education". You then search for adapted education, and not adapted and education as two separate words.

### Truncation

When truncating, you search for the stem of a word to include different endings. Usually, the truncation mark is an asterisk (*). Child* will give you hits on child, children, childish, childhood, etc.

## # Keyword searching

Subject-specific databases often contain subject dictionaries (also called thesaurus), with a list of standardized subject terms used to describe the content of documents. If you search applying standardized subject terms, you will get hits on all documents marked with this term. For example, documents in the database that deal with primary school, get the subject term primary school even if the author has used other terms (junior school, elementary school, grade school, etc.) It may be worthwhile to identify subject terms that cover your topic area. In health sciences, Medical Subject Headings (MeSH) is the most well-known glossary, and it is used in several health sciences databases.

## Combine search terms

Once you have found all the relevant keywords for your search, you need to think about how to combine them. In most databases, you can combine keywords in three different ways: AND, OR, and NOT. This is called searching with Boolean operators.

### Combining search terms using AND

If you combine two keywords with AND, you will only get hits on literature that contains both words. Combinations with AND sharpen the search and help limit the number of hits.

Example: Search for Diabetes AND “Quality of life” only results in literature that deals with both diabetes and quality of life.

<ClientOnly>
  <Venn 
    v-bind:sets="[
        {sets: ['diabetes'], size: 12}, 
        {sets: ['quality of life'], size: 12},
        {sets: ['diabetes','quality of life'], size: 3}
    ]" 
    text="Hits when doing AND search"
    type="and" />
</ClientOnly>

### Combining search terms using OR

If you combine two words with OR, you will get hits on literature with either or both words present. Combinations with OR expand the search and give you more hits. OR is usually used for synonymous keywords.

Example: Search for Diabetes OR Hyperglycemia gives hits on diabetes, hyperglycemia, or both.

<ClientOnly>
  <Venn 
    v-bind:sets="[
        {sets: ['diabetes'], size: 12}, 
        {sets: ['hyperglycemia'], size: 12},
        {sets: ['diabetes','hyperglycemia'], size: 3}
    ]" 
    text="Hits when doing a OR search"
    type="or" />
</ClientOnly>

### Combining search terms using NOT

If you combine two keywords with NOT, you will get hits on one word while omitting the other keyword. Combinations with NOT can exclude many documents, so they should be used with caution.

Example: Search for Diabetes NOT “Gestational diabetes” will result in literature covering diabetes while omitting everything that is also about gestational diabetes.

<ClientOnly>
  <Venn 
    v-bind:sets="[
        {sets: ['diabetes'], size: 12}, 
        {sets: ['gestational diabetes'], size: 12},
        {sets: ['diabetes','gestational diabetes'], size: 3}
    ]" 
    text="Hits when doing a NOT search"
    type="not" />
</ClientOnly>

## Using a search table

The table below has three columns, one for each of the three concepts in the research question. First, combine the synonymous keywords within each column with OR. Then combine the results from the three columns with AND.

Example: "How has globalization affected social inequalities within the education system?"


:::: søketabell 
::: tabell
Globalisation

**OR**

Globalization

**OR**

«Global approach*»

:::

::: kombinator
**AND**
:::

::: tabell
Inequalit*

**OR**

Inequit*

**OR**

«Equal opportunit*»


:::

::: kombinator
**AND**
:::

::: tabell
Education*

**OR**

School*


:::
::::

### Citation searching

Some databases and search tools, e.g., Web of Science and Google Scholar, provide citation information. That is, how many and who has used a given document in their reference list. How often a document is cited can say something about how much impact the document has had on the subject area. If you click on the link "Cited by" in Google Scholar, you will see a list of citations. Such a list can be used to highlight key documents and authors.

### Searching reference lists

It is not only by searching databases that you can find relevant and quality-assured information. If you have found a scientific article that is right up your alley, the article's reference list may refer to other relevant literature

