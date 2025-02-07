# Next.js 15 App Router Unexpected Behavior with useRouter Hook

This repository demonstrates an unexpected behavior in Next.js 15's App Router when using the `useRouter` hook for navigation between pages. The issue occurs when navigating from a page containing a component that utilizes `useRouter` to another page.

## Bug Description

The navigation might fail, resulting in the application staying on the current page.  This happens inconsistently. The `useRouter` hook seems to not work as expected in some cases within this new architecture.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Click the button to navigate to the '/about' page.
5. Observe the inconsistent navigation behavior.

## Expected Behavior

The navigation should always successfully redirect the user to the '/about' page.

## Actual Behavior

Sometimes the navigation fails, and the user remains on the same page.

## Solution

The issue might be caused by improper use of the `useRouter` hook. A potential solution might involve using client-side navigation only when absolutely necessary to ensure proper routing.