---
title: "Searching techniques"
date: "2022-07-18"
---

# Searching techniques

When searching academic databases, you will benefit from knowing som basic search techniques. In this section we will explain the most commonly used.

## Free text searching

Free text searching, or search for text words, is the most common way to search. Your search terms are matched towards content of the reference, i.e. words in the title, the abstract, and keywords. Consequently, when you do a free text search, it is important that you find the right level; not too spesific, and not too general.

::: eksempel Example
If you do a free text search on the word "preschool", you will find documents with the word "preschool" in the title, abstract, or as a keyword. Because different terms can be used for the same phenomenon, it is important to use multiple search terms. Words such as kindergarten, daycare, nursery school, etc. are all synonyms that can be used in a text about the preschool level.
:::

Alternatively, or additonal, to free text searching, you can search via a subject dictionary (also called thesaurus) also called a **subject heading search** internlenke.

### Phrase searching

If your search term consists of more than one word, such as inclusive education, you need to use quotation marks when searching: "inclusive education". When applying quotation marks, you search for **inclusive education** as a phrase, and not inclusive and education as two separate words.

### Truncation

When truncating, you search for the stem of a word to include different endings. Usually, the truncation mark is an asterisk(\*). Child(\*) will give you hits on child, children, childish, childhood, etc.

### Subject heading search

Subject-specific databases often contain vocabularies with a list of *standardized subject terms* that are applied when describing the content of an article, report or other document. These subject vocabularies are also referred to as *Thesaurus*. If you search using standardized subject terms, you will get hits on all documents "tagged" with these terms. For example, documents in the database that concern primary school, get the subject term primary school even if the author has used other terms (e.g. junior school, elementary school, grade school, etc.) It may be worthwhile to identify subject terms that cover your subject area. In health sciences, Medical Subject Headings (MeSH) is the most well-known vocabulary, and it is used in several health sciences databases. For a thorough search, the subject heading search should be performed in *addition* to the free text search.

## Combining search terms

When you have found relevant keywords for your search, the next step is concidering how to *combine* the search terms in a way that makes sense to the search engine so that it retrieves the literature you are looking for. In most databases, you can combine keywords in three different ways: AND, OR, and NOT. This is called searching with Boolean operators.

### Combining search terms using AND

When you combine two search terms with AND, you will only get hits on literature that contains both words in its reference. Combinations with AND targets the search and limits the number of hits.

Example: Search for Diabetes AND “Quality of life” only results in literature that concern *both* diabetes and quality of life.

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

When you combine two search terms with OR, you the search engine will retrieve hits on literature with either or both search terms present. Combinations with OR broaden the search and increase your number of hits. OR is used between synonymous or related search terms.

Example: Search for Diabetes OR Hyperglycemia gives hits on documents containing diabetes, hyperglycemia, or both.

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

When you combine two keywords with NOT, you will get hits on documents containing the first search term while omitting documents containing the other search term. Use the operator with cauton, as combinations with NOT can potentially exclude relevant documents.

Example: Search for Diabetes NOT "Gestational diabetes" will result in literature concerning diabetes but omitting all the literature that contains the term "gestational diabetes".

<ClientOnly>
  <Venn 
    v-bind:sets="[
        {sets: ['Diabetes','Gestational- diabetes'], size: 3},
        {sets: ['Diabetes'], size: 12}, 
        {sets: ['Gestational- diabetes'], size: 12},
    ]" 
    text="Hits when searching with NOT"
    type="not" />
</ClientOnly>

### Using a search table

The table below has three columns, one for each of the three thematic elements in the research question. First, combine the synonymous keywords within each column with OR. Then combine the results from the three columns with AND.

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

## Citation searching

Some databases and search tools, e.g., Web of Science and Google Scholar, provide citation information. That is, how many articles and which has cited a given document. How often a document has been cited can indicate how much impact the document has had on the subject area. If you click on the link "Cited by" in Google Scholar, you will see a list of citations. Such a list can be used to highlight key documents and authors.

## Searching reference lists

It is not only by searching databases that you can find relevant and quality-assured information. If you have found a scientific article that is spot on for what your paper is examining, the article's reference list will most likely refer to more literature that is relevant for you.

