import React,{ useEffect } from "react";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { Section } from "./Section/Section";
import { FormHooks } from "./Form/FormHoocks";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "redux/Operations";
import { SelectIsLoading,Selectitems } from "redux/Selectors";
import { Bars } from "react-loader-spinner";


export const AppH = () => {
 const isLoading = useSelector(SelectIsLoading);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  },[dispatch])

  return (
    <>
      <Section title="Phonebook">
        <FormHooks />
      </Section>

      <Section title="Contacts">
        <Filter />
      </Section>
     {isLoading && (
        <div style={{justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            position: 'fixed',
            top: 100,
            right: 130,}}>
         <Bars
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
          <span>Loading...</span>
        </div>
      )}
      <ContactList />
    </>
  );
}