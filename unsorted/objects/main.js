const defaults = {
    host: 'localhost',
    dbname: 'blog',
    user: 'admin'
};

const opts = {
    user: 'root',
    password: 'toor',
    role: ['admin']
};

const shallowCopy = Object.assign({}, opts);
opts.role.push('user');
console.log('shallowCopy:', shallowCopy);

const res = Object.assign({}, defaults, opts);
console.log(res);