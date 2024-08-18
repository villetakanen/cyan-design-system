---
name: 'Flex'
noun: 'Layout'
---

# Flex

The default styling for flexbox is:
```css
.flex {
  display: flex;
  gap: var(--cn-gap);
  flex-wrap: wrap;
  align-items: flex-start;
}
```

## Atomics

We do provide a set of atomic classes to help you with flexbox layouts. These classes follow the
best-practice naming conventions from [Tailwind CSS](https://tailwindcss.com/).

| Class | Description |
| --- | --- |
| `flex` | This class sets `display: flex;` on the element. |
| `flex-row` | This class sets `flex-direction: row;` on the element. |
| `flex-col` | This class sets `flex-direction: column;` on the element, and `width: 100%` to all direct children |
| `flex-no-wrap` | This class sets `flex-wrap: nowrap;` on the element. |
| `grow` | This class sets `flex-grow: 1;` on the element. |
| `shrink` | This class sets `flex-shrink: 1;` on the element. |