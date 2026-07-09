-reusability:
children prop, will lead to compound components that uses context, composition, render props, custom hooks
-react router 6 
- prop drilling: is when a child component needs data from the parent component (grandparent), and that data is manually passed doown to each child until it reaches the component that needs it, well this will cause us that we may pass props to components that does do nght with it 

- to solve that we use compound components; it uses children props, make the componnet structure more transparent
- that will use context; it access state directly from the components that need it 

- so context allows us to create a global state that any component can have access to, skipping thge componnets inthe middle

- context; solves global/distant prop drilling
- compound componnets; use context to solve local prop drilling 