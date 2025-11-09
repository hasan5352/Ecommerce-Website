
export function QuantityDropdown({ ref }){
  return (
		<select ref={ref}>
			{[...Array(10)].map((_, i) => <option key={i+1} value={i+1}>{i+1}</option> )}
		</select>
	);
}