---
title: Understanding Convolutions on Graphs
date: "2020-12-09T22:40:32.169Z"
template: "post"
draft: false
slug: "/blog/understanding-convolutions-on-graphs"
category: "Typography"
tags:
  - "Design"
  - "Typography"
  - "Web Development"
description: "Understanding the building blocks and design choices of graph neural networks."
---

Many systems and interactions - social networks, molecules, organizations, citations, physical models, transactions - can be represented quite naturally as graphs. How can we reason about and make predictions within these systems?

One idea is to look at tools that have worked well in other domains: neural networks have shown immense predictive power in a variety of learning tasks. However, neural networks have been traditionally used to operate on fixed-size and/or regular-structured inputs (such as sentences, images and video). This makes them unable to elegantly process graph-structured data.

## The Challenges of Computation on Graphs

### Node-Order Equivariance

Extending the point above: graphs often have no inherent ordering present amongst the nodes. Compare this to images, where every pixel is uniquely determined by its absolute position within the image!

As a result, we would like our algorithms to be node-order equivariant: they should not depend on the ordering of the nodes of the graph. If we permute the nodes in some way, the resulting representations of the nodes as computed by our algorithms should also be permuted in the same way.

### Scalability

Graphs can be really large! Think about social networks like Facebook and Twitter, which have over a billion users. Operating on data this large is not easy.

Luckily, most naturally occuring graphs are ‘sparse’: they tend to have their number of edges linear in their number of vertices. We will see that this allows the use of clever methods to efficiently compute representations of nodes within the graph. Further, the methods that we look at here will have significantly fewer parameters in comparison to the size of the graphs they operate on.

## Problem Setting and Notation

There are many useful problems that can be formulated over graphs:

- **Node Classification:** Classifying individual nodes.
- **Graph Classification:** Classifying entire graphs.
- **Node Clustering:** Grouping together similar nodes based on connectivity.
- **Link Prediction:** Predicting missing links.
- **Influence Maximization:** Identifying influential nodes.

A common precursor in solving many of these problems is **node representation learning:** learning to map individual nodes to fixed-size real-valued vectors (called ‘representations’ or ‘embeddings’).

