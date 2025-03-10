-- Seed data for publications
INSERT INTO publications (name, website, description, format, frequency, categories, image_url)
VALUES
  ('Manufacturing Engineering', 'https://www.sme.org/me', 'The flagship publication of SME, covering manufacturing technology, trends, and best practices.', 'Print', 'Monthly', ARRAY['Manufacturing Technology', 'Industry Trends', 'Best Practices'], 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'),
  
  ('Industry Week', 'https://www.industryweek.com', 'Provides manufacturing leaders with insights, trends, and strategies for improving operations.', 'Mixed', 'Monthly', ARRAY['Manufacturing Leadership', 'Operations', 'Technology'], 'https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'),
  
  ('Additive Manufacturing', 'https://www.additivemanufacturing.media', 'Focused on industrial applications of 3D printing and additive manufacturing technologies.', 'Digital', 'Bi-monthly', ARRAY['3D Printing', 'Additive Manufacturing', 'Digital Manufacturing'], 'https://images.unsplash.com/photo-1581093196277-9f608bb3b1a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'),
  
  ('Modern Machine Shop', 'https://www.mmsonline.com', 'Provides information on metalworking equipment, processes, and technologies.', 'Mixed', 'Monthly', ARRAY['Metalworking', 'CNC Machining', 'Tooling'], 'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'),
  
  ('Manufacturing Business Technology', 'https://www.mbtmag.com', 'Covers technology solutions for manufacturing executives and decision-makers.', 'Digital', 'Monthly', ARRAY['Manufacturing Technology', 'Business Solutions', 'Digital Transformation'], 'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'),
  
  ('The Manufacturing Show', 'https://themanufacturingshow.com', 'A podcast discussing the latest trends and innovations in manufacturing with industry experts.', 'Podcast', 'Weekly', ARRAY['Manufacturing Trends', 'Industry Insights', 'Innovation'], 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80'); 