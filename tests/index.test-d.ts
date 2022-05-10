import {expectType} from 'tsd';

import {YourComponent} from '../dist/index.js';

expectType<() => JSX.Element>(YourComponent);
