import type { elements } from './index';

const logo = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAD9CAMAAAAxtrp5AAAAhFBMVEX///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC9KDLhAAAAK3RSTlMAECAwQFBganB5gIiQmJ6gsLK4wMTO0NPU1tjg4uTl7PDx8vP0+Pn6+/z9EDW8sAAADOZJREFUeNrtnemCo7gRgNGBlijsQqIOng12lrEnk9nl/d8v0zaHBDptwBxV/7rBCH1IpVKpVIqiKEIs+/iVRiAe8sv3+qf8+EIAhZvVn/VDvmOA4RDyo27ly3yFcFHeiyhFyjb8Tf7Rsap/zNMRES9rRcp0qz2+kmqRzlFAXNVjKdgmYclVyGZ4flbrpdwirP9KFfh1+i5Y1CaZuijM+Ozmz7/61/8znvzpuZGVmLgkdm+uMytD1o+G1eQP5zIdkaZCVDPpR9pUAc1L62O+hkV6Ut2zUZzeB8dk2qJEU1AyLyz05VHMX79M/ui2BtVAmZCfWn9i/dJ+lXxmrZXNpHHbrlEXSGN7oXlgia3Cah5cLWGCbr1loWXUiDrs6oxdyu+yaljxktZnM5aUyDwmrxpWtmDDamZVBYk2Cqsx3hdzMlBKrNbeqmGtZg64AVhkmbF8H7AaK4sDLIA1rSSLDoYbh9W8IgVYAAtgASyABbD2BgszLj6FJ2QZWP4FTgPrZ3l5UyANg8XujqDuR4jJK1sl186ReSONTznjvXT3Y64++KUC5WIldxbmgzfp38O4wktSdfE8ZwGwhGKEs+HacsWN82etUKd1/0yBcrFiNIMIWIajYnzrsERPWEjoluHRfLB8C5wIFkoNS+ckHBaptI8av/wEsLKgAqeBRcxr5ywEVmp+dc3LTwBLBBU4CSxjcQNaTlhCflb5OVKUltCbaWAFFDgFLJlVJVLOU6VIFgILNc8qEzwepkj4aOiEhcrBACgXSL1ghYyGuNKMuDgpx3X0gCU0I0M3VIlwO8sJS2huiK0FWi657az2Q1QDh1LSFtmtGrlhJbUuRKVrunhyWI4CycSw2viVAhvVPveFVVZ6xUqtSuQFWIWhQGIp8AVY2DJ0tPqgDc9xwjI+KbMt4LwAy1hgao6NegGWsA2zRG1aXrAqbPkkZAZY2gKRucDnYVFbLbpfVwGwYtscPJkBVmiBz8PK7CsrrSUQe8MyhObGltCV12DloQU+DQu5Yga5jMADlulJTUHF5LAqbJ0ClhPCSlxLdlgu0wMWdxgok8PiDmU8ISzhDMmQgzY8YCFHf8dTwzIWmJqU8bOwkDsIjktzHjes7Bl36CuwnijwWVixey1Yfls3LLNrmM0Dy1xgPDUs7hEYJT3bbcE7obNpYbkLTCaDJTy2AJT9MObjovFpoVNOpMMLfBZW5REYJY0qx4blE+uTAyxXBUYPIADLY3VTqsqhYTGA5Q+LA6xgWIWwSQmwFI+yjwAsgAWwABbA2h4s7iMYYIWFUAIsgAWw5oKFAdZUc0OABbAA1gLOvxhgTeVWBlgPwYE56WB1xxDaArCGUjiCKwDWuPYxwPKAxcKU1rFh4bB8h8eG1UR91AxgecDiQQmGjgKLWvuhZ9M6OKw2oMia4pQdBhazT2moO7di1rW73cOijkxewpWHO+tDfncPK6rt7tBut6GeFi6kXrp/WIWjnyW1cQ9dv+ewOAis1JX8uk9anw1wsVLdkbN/WF1CbMFwhCgbJdOQ09bnXWoSwrJquK96/7AiYdrZrqN131MuJWNXNiMeABZ1wYpQbg1zyA5jZ0lay7KZMTFndqiCUhVsHtbg3BGtfYpNjUtW+oeApbYtgzFPNEe5VOr4aIFF6KdYEleh+w1Uu4H6cQkF/ez5Aqnrl7gb2qrceBuKM1nVizT2n0jvTAiNYyvQ/osxQxM4DqwJBGABLIAFsAAWwAIBWAALYAGsDQn6T3PW72/Awinndor9198AhkO6A8rr+jsCHHb5t3ToNgMcdqlnPRp5x7AywGEXeU3j74DDLr9JOosADrvg/3WwPg5KgKXi8ln/i0gZ9rQdzoe0HJi6cP+743b6x/1E938ekRU9D9cJnT8hnDO8+Isiw2rTgpL6HpzyRiFJ1se1nAR/16lPWb12WCS9jN8xZ+tgtS5YuoOA7nLlS+vMRPca+YpalbDEQF3iRd8Ff9O9BF8NK1eWnBy9uROuBxYSzjxC5+XmEFgp+MQ/Y3BizlcyiSFnj6xLN/IOjfV1PBzja6dM32DekJtXjqrFaEnNXDd1obX9TKR5++BXz4xeS026ajuNd8JCp6Eu53frHVGWXd5h6VCHtfBOWJnNpopVzb/Imeax/kS+NcCKFRrpqKfFskK7LdERJSsGrwsWknvaTWd7kq/OM/lmgxWtCxZ3D3fKYIkODAvJEwviYffwA8PiXtpb0vKX48JCVy+7gHo0v/3DYrVj5Gnk5KfiETUc2H1XfY+LPHFtDVgrrNxzFVfSWlKGpi7/7H0QRcnJOGfDSa5MqfJE82moek6rmv02/nSwP0QyDDPlDWbuhb7dC2uXDZQfs6txlqL1KuY0yEskXJeX7IUn+51nHQjpf4MNlDII+mHa/oY2BSvznsho75R2VJ5M21Ft21CvZEuwLt6DXKKztCSvk2nvrsNTxrYDS1JZV39PQKZzpRhgOT1ldDOwXL4QpWl14xLxh+X2Kt7wVmDxF2cxLljIw1stNggrngOW6im7ZMnnygNXLS6pIzIbDa76ipZf+REvmsIax/P94KDzwyhVMjac+8+Bkpu1TazTghd+cx1fWB8MmR4/+PL4ZJtmrR5W9DKsa2yx+ofuYXyzWHjrhHWbENYJW0yz3DZ3ENuAVU8H64ZtRj+22cO3w8GKbZ1cN+9MzZ7qvcMSVvdPbp/D04PB0plpTQ4XQ8AlPS6s8JcGWAALYL0BFqJUOjYuA1jGdsTFzcundXhYJLt6OwDXC+uyBCzqDFfdBiwxPyyU+h0RuilYaB5YXpG9m4NFZ4HlF9m7DVjTuZXpC6w2AiuZbMFC+9Kj9YqryLZrZ4UshcXKKcResJT1im+Z6nTenAUfsMhKdFztL61sKhntK9scrIDle2Zfvqf2hvWVbH9uOF1giO6lb9bA3u3B8g85OjlCjqxV4nvwOihq5aVgNmq1S9AuYEVFeJik8ISV2+MQNgjriQBc7glL7A4WunmZWobQ7oPBUgzH2GcSeYqCYWlPoM03CAv77FSNDVELnrB0Cp7VG4SlZDEx7FSV58NXFAUreI3pwOpNwpI3pNQnXdtSttBx74k0tzRZNpXXIVkWlro58zYuXYk8U9uer1E6+AjDc2FCYUVvTCKivvqHouYRO1vqZe8OcpO99RPp8Zkw8fOwFt/3O9xQfsnYZ3QCpjEfrjWkIf4sNWD2do8oTdKzOx7UCUt+rZRi8vOxi2UT8XRojuePdljI97HBsHRxy9HKaJ1QmKc08YQlQmGRd8LyozVi5fTBCz9Yl1BY0emdsCJyclZJk+bIBQvZnno1zkrdsOhbYUUos6P6loQvWNho3ZgwxjK7YUX5W2HpkjfKagVHz8DSpTlsDS9uVFoesMZfYWmDi5lw5dRl79Cgb3Dlg64UDGtMK1pc4mys6YvE6Ojysw3ZQM+fEzTQ0lfTKGrLi8CV0Jzfo3cI5XlXOZHz2BYEgWwRtvL8hrXpPM/9eb39r0fnLBLTBbV0lj1a7WcqYThbAAQEBAQEBAQEBAQEBAQEBARkRnlXNneAtXqh+ur6QgBYAAtgASyABbAAFsACWBPAIuNFa/2v72vU+mB82wI1oZTsAxbOmtOwqwzr70vv6TpRRJs4omp0nE17pS6lDbGPn5EoLhc6WmN2WGoOjFR73yMMgkp3Vkr8MpYDS/pLzc+yxc4hmRsWKgYZ4M2wClM2b1LpE30/fibqvcAasuppjWENhJhYdbTEwumC54bV1qcQolQ3COhhFaIY7iRDLauf+qlVfnijsBKqigKr2aFT3P9kj6qWZlgplpVc034alZTfr3G5eXawKpEJwTYAy5ov5dGaimYAI/I1Day2uom8KwervfdxrUIyrCRavXjAigfaJ5NGxDGsPFKHuccmxUc7KzuDoez7stiOYesBKxtEIlNJGY1hca06LAfXeA9cuLfBbwhWOTQCpLBiGyyJEB5uKqD9BxDrV+wBsEZDgFRzK6y8az5tI+sk6UeJ7cGymA7URtIKi3fNx3RsBcACWAALYM0Eiw8FB8MqR8/YHSxsS55khSW60fAxYaq0j9gVrMg2G7HCqrp/UEtKoX3ByuWZcwAs+dGV2UzfFyw2alqkJEZYo7mh7HSQ+jJrJ+b7gtW6opjkx6tI5PI6MNnR0BRTdbRY58bYF6xu4H+sVOB7K6mo2Z+FJJ9V+4zmYvXY0PnIAF7gHcLqk+RJrtLM6ikVw23TuPMq967SRyPcG6yxD77tQy4ffIXNPnjFU7ofWGNarXYew1KYVJJGH9HKon3C+qm35KpW3GI6SOuGpWLJqiknynh7pgMRzYLwwPgZ/RclbesSCdLe19a6Xbsuk+GKNE4bjVflvS/xsSLNor2JOYRh0ESIMaABeWzyP4JsqD8BLIAFsEAAFsACWADrgLD+D5yZ8abDhoarAAAAAElFTkSuQmCC';
export function init(elements: elements) {
	elements.logo.src = logo.trim();

	const versionNumber = document.createElement('p');
	versionNumber.appendChild(document.createTextNode(`v${GM.info.script.version}`));
	versionNumber.classList.add('version');
	elements.logo.after(versionNumber);
}
