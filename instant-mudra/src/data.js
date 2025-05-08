export const files = [
    {
        label: 'src',
        type: 'folder',
        children: [
            {
                label: 'components',
                type: 'folder',
                children: [
                    {
                        label: 'Avatar',
                        type: 'folder',
                        children: [
                            {
                                type: 'file',
                                label: 'avatar.js',
                            },
                            {
                                type: 'file',
                                label: 'index.js',
                            },
                        ],
                    },
                ],
            },
            {
                label: 'index.js',
                type: 'file',
            },
            {
                label: 'Tooltip',
                type: 'folder',
                children: [
                    {
                        label: 'index.js',
                        type: 'file',
                    },
                    {
                        label: 'tooltip.js',
                        type: 'file',
                    },
                ],
            },
            {
                label: 'Mui',
                type: 'folder',
                children: [
                    {
                        label: 'index.js',
                        type: 'file',
                    },
                    {
                        label: 'types.ts',
                        type: 'file',
                    },
                ],
            },
        ],
    },
];

//   Expected Output: The function should print the file structure in the following format:
//   > src
//     > components
//       > Avatar
//         - avatar.js
//         - index.js
//     - index.js
//     > Tooltip
//       - index.js
//       - tooltip.js
//     > Mui
//       - index.js
//       - types.ts