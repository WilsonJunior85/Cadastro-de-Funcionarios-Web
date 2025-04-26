export const Menu: any = [
    {
        navigateToPath: '',
        alias: 'Home',
        type: 'link',
        canRender: [{ 'teste.acesso': ['Sim'] }]
    },// {
    //     navigateToPath: '/usuario/',
    //     alias: 'Usuários',
    //     type: 'link',
    //     canRender: [{ 'teste.acesso': ['Sim'] }]
    // }, {
    //     navigateToPath: '/client/',
    //     alias: 'Clients',
    //     type: 'link',
    //     canRender: [{ 'teste.acesso': ['Sim'] }]
    // }, {
    //     navigateToPath: '/scope/',
    //     alias: 'Scopes',
    //     type: 'link',
    //     canRender: [{ 'teste.acesso': ['Sim'] }]
    // }, {
    //     navigateToPath: '/claim/',
    //     alias: 'Claims',
    //     type: 'link',
    //     canRender: [{ 'teste.acesso': ['Sim'] }]
    // },

    {
        alias: 'Menu',
        canRender: [{ 'teste.acesso': ['Sim'] }],
        navigateToPath: null,
        type: 'dropdown',
        children: [
            {
                alias: 'Cadastro de Funcionários',
                canRender: [{ 'teste.acesso': ['Sim'] }],
                navigateToPath: 'cadastrar-funcionarios',
                type: 'link',
            },
            {
                alias: 'Editar Funcionários',
                canRender: [{ 'teste.acesso': ['Sim'] }],
                navigateToPath: 'editar-funcionarios',
                type: 'link',
            },
            // {
            //     alias: 'Scopes',
            //     canRender: [{ 'teste.acesso': ['Sim'] }],
            //     navigateToPath: '/s',
            //     type: 'link',
            // },
            // {
            //     alias: 'Claims',
            //     canRender: [{ 'teste.acesso': ['Sim'] }],
            //     navigateToPath: '/s',
            //     type: 'link',
            // },
        ],
    },
];
