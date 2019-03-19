import React from 'react';
import Button from '@material-ui/core/Button';
import { FormSpace, FormContent } from '~/components/FormInputs';
import useLayoutFeatures from '~/hooks/useLayoutFeatures';

const SimpleHookLayout = (props) => {
  const {
    submitButtonText,
    children,
  } = props;

  const {
    il, resetIl, classes, tData: { t/* , i18n, ready */ }, host,
  } = useLayoutFeatures({
    ...props,
    onDidMount: (il) => { console.warn('il :', il); },
    onSubmit: (outputs) => { resetIl(); console.warn('outputs :', outputs); },
  });

  // if (!ready) {
  //   t = () => '';
  // }

  // host.xx = xxx

  il.updateHost(host);

  return (
    <div>
      <FormSpace variant="top" />
      <FormContent>
        {
          il.fieldLinks.map((filedLink) => {
            const space = 'space' in filedLink.options ? filedLink.options.space : <FormSpace variant="content1" />;
            return (
              <React.Fragment key={filedLink.name}>
                {il.renderComponent(filedLink.name, { translate: t })}
                {space}
              </React.Fragment>
            );
          })
        }
        <Button
          variant="contained"
          fullWidth
          color="primary"
          className={classes.login.loginBtn}
          onClick={host.handleSubmit}
        >
          {submitButtonText}
        </Button>
        <FormSpace variant="content1" />
      </FormContent>
      {children}
    </div>
  );
};
SimpleHookLayout.displayName = 'SimpleHookLayout';

export default SimpleHookLayout;

// export default (props) => {
//   return (
//     <React.Suspense fallback={<div>Loading...</div>}>
//       <SimpleLayout {...props} />
//     </React.Suspense>
//   );
// };
