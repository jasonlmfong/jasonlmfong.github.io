---
layout: post
title:  "Categorizing Quasiperfect Numbers"
date:   2020-07-04 14:42:34 -0400
categories: Blog Post
---
Perfect numbers is a named used by Euclid to describe numbers which equal to the sum of its proper divisors

It is an interesting concept in number theory, as there are a few unsolved problems around this

Denote the sum of divisor function as $\sigma(n) = \displaystyle\sum_{d\mid n} d$

A perfect number is a number $n$ such that $\sigma(n) =  2n$

A quasiperfect number is a number $n$ such that $\sigma(n) =  2n + 1$

As the name suggests, a quasiperfect number is *almost* perfect (not to be confused with almost perfect numbers)

Today I will give an elementary proof of why odd quasiperfect numbers must be perfect squares

<div style="white-space: pre;border: 1px solid black">
    First notice $\sigma(n)$ is odd

    Since $n$ is odd, all of its divisors must be odd as well

    Now I claim $n$ has an odd number of divisors

        Proof: 
        We can enumerate the divisors of $n$ as $d_1, d_2, ..., d_m$, where $d_i = 2k_i +1$ since $d_i$ is odd
    
        $\sigma(n) = \displaystyle\sum_{d \mid n} d = \displaystyle\sum_{i = 1}^m d_i = \displaystyle\sum_{i = 1}^m (2k_i + 1) = 2(\displaystyle\sum_{i = 1}^m k_i) + m = 2n+1$
    
        so $m$ must be odd
    
    Now the only numbers with an odd number of divisors are perfect squares

        Proof: 
        Suppose $n$ has prime factorization $n = \displaystyle\prod_{i=1}^j p_i^{r_i}$

        The number of divisors of $n$ is given by $\tau(n) = \displaystyle\sum_{d\mid n} 1 = \displaystyle\prod_{i=1}^j (r_i + 1)$

        for the product to be odd, each $r_i$ must be even

    so $n$ is a perfect square

</div>



