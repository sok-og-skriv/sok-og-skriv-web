---
title: "Searching techniques"
date: "2022-07-18"
---

# Search techniques

When searching academic databases, you will benefit from knowing some basic search techniques. This section will explain the most common.

## Free text searching

Free text searching, or searching for text words, is the most common way to search. Your search terms are matched to content of the reference, that is, words in the title, abstract, and keywords. Consequently, when you do a free text search, it is important that you find the right level of precision in the serach terms;; not too specific, and not too general. It is also important to be aware of relevant synonyms to search terms. 

::: eksempel Example
If you do a free text search on the word "preschool", you will find documents with the word "preschool" in the title, abstract, or as a keyword. Because different terms can be used for the same phenomenon, it is important to use multiple search terms. Words such as "kindergarten", "daycare", "nursery school", and so on are all synonyms that can be used in a text about the preschool level of education.
:::

As an alternative, or in additon, to free text searching, you can search via subject vocabulary (or thesaurus), called a [subject heading search](https://sok-og-skriv-git-613-engelsk-versjon-av-soketeknikker-uib-ub.vercel.app/en/searching/searching-techniques.html#subject-heading-search)

### Phrase searching

If your search term consists of more than one word, such as *inclusive education*, use quotation marks when searching: "inclusive education". By applying quotation marks, the search is for **inclusive education** as a phrase, and not *inclusive* and *education* as two separate words.

### Truncation

By truncating, the search is for the stem of a word, and includes different endings. Usually, the truncation mark is an asterisk (\*). Child(\*) will give you hits on child, children, childish, childhood, and so on.

### Subject heading search

Subject-specific databases often contain vocabularies with a list of *standardized subject terms* that are applied when describing the content of an article, report or other document. These subject vocabularies are also referred to as a *thesaurus*. If you search using standardized subject terms, you will get hits on all documents "tagged" with these terms. For example, documents in the database that concern primary school get the subject term "primary school" even if the author has used other terms (e.g. "junior school", "elementary school", "grade school", etc.) It may be worthwhile to identify subject terms that cover your subject area. In health sciences, Medical Subject Headings (MeSH) is the most well-known vocabulary, and it is used in several health sciences databases. For a thorough search, the subject heading search should be performed *in addition* to a free text search.

## Combining search terms

When you have chosen relevant keywords for your search, the next step is considering how to *combine* the search terms in a way that makes sense to the search engine, so that it retrieves the literature you are seeking. In most databases, you can combine keywords in three different ways: AND, OR, and NOT. This is called searching with Boolean operators.

### Combining search terms using AND

When two search terms are combined with AND, you will only get hits for literature in which both terms are used in the reference. Combinations with AND targets the search, and limits the number of hits.

Example: A search for *Diabetes* AND *“Quality of life”* only results in literature in which **both** the terms *diabetes* and *quality of life* are used.

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

When you combine two search terms with OR, the search engine will retrieve hits for literature in which either or both search terms are used. Combinations with OR broaden the search and increase your number of hits. OR is used between synonymous or related search terms.

Example: A search for Diabetes OR Hyperglycemia gives hits for documents containing either diabetes, or hyperglycemia, or both.

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

When you combine two keywords with NOT, you will get hits for documents in which the first search term is used, while the search will omit documents in which the second search term is used. Use the operator with caution, as combinations with NOT can potentially exclude relevant documents.

Example: A search for *Diabetes* NOT *Geriatrics* will result in literature in which the term *diabetes* is used, but the search will omit all literature that uses the term *geriatrics*.

<ClientOnly>
  <Venn 
    v-bind:sets="[
        {sets: ['Diabetes','Geriatrics'], size: 3},
        {sets: ['Diabetes'], size: 12}, 
        {sets: ['Geriatrics'], size: 12},
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

Some databases and search tools, for example, Web of Science and Google Scholar, provide citation information, that is, how many and which have cited a given article or other type of document. How often a document has been cited can indicate how much impact the document has had on the subject area. If you click on the link "Cited by" in Google Scholar, you will see a list of citations. Such a list can be used to highlight key documents and authors.

## Searching reference lists

It is not only by searching databases that you can find relevant and quality-assured information. If you have found a scientific article that is precisely what your paper is examining, the article's reference list will most likely refer to more literature that is relevant for you.

