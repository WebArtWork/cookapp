export const cookoptionFormComponents = {
	formId: 'cookoption',
	title: 'Cookoption',
	components: [
		{
			name: 'Text',
			key: 'name',
			focused: true,
			fields: [
				{
					name: 'Placeholder',
					value: 'fill build option title',
				},
				{
					name: 'Label',
					value: 'Title',
				}
			]
		},
		{
			name: 'Text',
			key: 'color',
			fields: [
				{
					name: 'Placeholder',
					value: 'fill build option color',
				},
				{
					name: 'Label',
					value: 'Color',
				}
			]
		},
		{
			name: 'Number',
			key: 'price',
			fields: [
				{
					name: 'Placeholder',
					value: 'fill build option price in uah per kg',
				},
				{
					name: 'Label',
					value: 'Price',
				}
			]
		},
		{
			name: 'Select',
			key: 'type',
			fields: [
				{
					name: 'Placeholder',
					value: 'fill build option price in uah per kg',
				},
				{
					name: 'Label',
					value: 'Price',
				},
				{
					name: 'Items',
					value: ['Biscuit', 'Cream', 'Filler']
				}
			]
		}
	]
}
